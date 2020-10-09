import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Constants from 'expo-constants';

export default class BeneficiaryList extends React.Component<any, any> {
  render() {
    const { navigation } = this.props;

    const data = [
      { id: 1, name: 'Mr Tan Ah Kau', status: 'Pending' },
      { id: 2, name: 'Mr Tan Ah Kau', status: 'Pending' },
      { id: 3, name: 'Mr Tan Ah Kau', status: 'Pending' }
    ];

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.tableContainer}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate('Profile')}
            >
              <View style={styles.circle}>
                <Text>👩</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={{ color: 'white' }}>{item.status}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => `${item.id}_${index}`}
        />
      </View>
    );
  }
}

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
