import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Constants from 'expo-constants';
import firebaseDb from '../../../../firebaseDb';
import { connect } from 'react-redux';

export class BeneficiaryList extends React.Component<any, any> {
  state = {
    data: null
  };

  componentDidMount() {
    firebaseDb
      .collection('Profile')
      .where('CaseManager', '==', this.props.session.userId)
      .get()
      .then((snapshot) => {
        const data = [];
        snapshot.docs.forEach((document) => {
          const userData = document.data();
          const profileId = document.id;
          data.push({ profileId, ...userData });
        });
        this.setState({ data });
      });
  }

  render() {
    const { navigation } = this.props;
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.tableContainer}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate('Profile', {userData: item})}
            >
              <View style={styles.circle}>
                <Text>👩</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.Name}</Text>
                <Text style={{ color: 'white' }}>{item.Race}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => `${item.id}_${index}`}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session
});

export default connect(mapStateToProps)(BeneficiaryList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30444E'
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#FFC542',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableContainer: {
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 10
  },
  itemContainer: {
    paddingVertical: 5,
    flexDirection: 'row'
  },
  textContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  }
});
