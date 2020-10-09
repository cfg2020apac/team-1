import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Constants from 'expo-constants';
import { Icon, Divider } from 'react-native-elements';

export default class BeneficiaryList extends React.Component<any, any> {
  state = {
    myClient: true,
    newClient: false
  };

  handleToggleClient = () => {
    this.setState({
      myClient: !this.state.myClient,
      newClient: !this.state.newClient
    });
  };
  render() {
    const { navigation } = this.props;

    const data = [
      {
        id: 1,
        name: 'Mr Tan Ah Kau',
        status: 'Pending',
        bgColor: '#FFC542'
      },
      {
        id: 2,
        name: 'Mr Tan Ah Kau',
        status: 'Follow Up',
        bgColor: '#FF565E'
      },
      {
        id: 3,
        name: 'Mr Tan Ah Kau',
        status: 'Completed',
        bgColor: '#3ED598'
      },
      {
        id: 4,
        name: 'Mr Tan Ah Kau',
        status: 'Completed',
        bgColor: '#3ED598'
      }
    ];

    return (
      <View style={styles.container}>
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
        <FlatList
          style={styles.tableContainer}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate('Profile')}
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 80 / 2,
                  backgroundColor: item.bgColor,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text>👩</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={{ color: 'white' }}>{item.status}</Text>
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
