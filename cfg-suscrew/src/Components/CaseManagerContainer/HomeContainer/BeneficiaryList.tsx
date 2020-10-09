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
import { Icon, Divider } from 'react-native-elements';
import { connect } from 'react-redux';

export class BeneficiaryList extends React.Component<any, any> {
  state = {
    data: null,
    myClient: true,
    newClient: false
  };

  handleToggleClient = () => {
    this.setState({
      myClient: !this.state.myClient,
      newClient: !this.state.newClient
    });
  };

  componentDidMount() {
    this.getData()
  }

  getData = () => {
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
    const colors = ['#FFC542', '#FF565E', '#3ED598', '#3ED598'];

    return (
      <View style={styles.container}>
        {this.props.session.role !== 'Case Manager' && (
          <View
            style={{
              marginTop: 64,
              justifyContent: "flex-end",
              alignSelf: "flex-end"
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 8,
                backgroundColor: '#7A3789',
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 16
              }}
              // onPress={this.handleToggleClient}
            >
              <Text style={{ color: '#fff' }}>My Clients</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                backgroundColor: '#ddd',
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 16
              }}
              // onPress={this.handleToggleClient}
            >
              <Text style={{ color: '#333' }}>New Clients</Text>
            </TouchableOpacity>
          </View>
        )}
        {this.props.session.role === 'Case Manager' && (
          <View
            style={{
              marginTop: 64,
              paddingHorizontal: 24,
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 8,
                backgroundColor: '#7A3789',
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 16,
                marginTop: Constants.statusBarHeight
              }}
              onPress={() => navigation.navigate('AddProfile')}
            >
              <Text style={{ color: '#333' }}>➕</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                backgroundColor: '#7A3789',
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 16,
                marginTop: Constants.statusBarHeight
              }}
              onPress={() => this.getData()}
            >
              <Text style={{ color: '#333' }}>🔄</Text>
            </TouchableOpacity>
          </View>
        )}
        <FlatList
          style={styles.tableContainer}
          data={data}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => {
                if (this.props.session.role !== 'Case Manager')
                  navigation.navigate('ActivityDetails');
                else navigation.navigate('Profile', { userData: item });
              }}
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 80 / 2,
                  backgroundColor: colors[index % 4],
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text>👩</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.Name}</Text>
                <Text style={{ color: 'white' }}>{item.Race}</Text>
              </View>
              <Icon
                name="chevron-right"
                color="#ddd"
                containerStyle={{ marginLeft: 124, alignSelf: 'center' }}
              />
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
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  itemContainer: {
    paddingVertical: 16,
    flexDirection: 'row'
  },
  textContainer: {
    flexDirection: 'column',
    padding: 16,
    justifyContent: 'space-between'
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  }
});
