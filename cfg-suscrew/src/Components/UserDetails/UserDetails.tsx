import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class UserDetails extends React.Component<any, any> {
  render() {
    const { route } = this.props;
    const { userData } = route.params;

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.circle}>
            <Text>👩</Text>
          </View>
          <View style={{ marginLeft: 10, marginTop: 11, paddingBottom: 55 }}>
            <Text style={{ color: '#fff', fontSize: 30 }}>{userData.Name}</Text>
            <Text style={{ color: '#fff', fontSize: 20 }}>
              Mobile Number: {userData.MobileNumber}
            </Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={{ color: '#fff', fontSize: 20, paddingBottom: 30 }}>
            DOB: {new Date(userData.DateOfBirth.seconds * 1000).toDateString()}
          </Text>
          <Text style={{ color: '#fff', fontSize: 20, paddingBottom: 30 }}>
            Gender: {userData.Gender}
          </Text>
          <Text style={{ color: '#fff', fontSize: 20, paddingBottom: 30 }}>
            Citizenship: {userData.Citizenship}
          </Text>
          <Text style={{ color: '#fff', fontSize: 20, paddingBottom: 30 }}>
            Race: Chindian{' '}
          </Text>
          <Text style={{ color: '#fff', fontSize: 20, paddingBottom: 30 }}>
            Languages: English, Chinese{' '}
          </Text>
          <Text style={{ color: '#fff', fontSize: 20, paddingBottom: 10 }}>
            Preferences for roommate:{' '}
          </Text>
          <Text style={{ color: '#fff', fontSize: 20, paddingBottom: 10 }}>
            Ex-Convict: No
          </Text>
          <Text style={{ color: '#fff', fontSize: 20, paddingBottom: 10 }}>
            Smoker: No
          </Text>
          <Text style={{ color: '#fff', fontSize: 20, paddingBottom: 10 }}>
            Same Race: Yes
          </Text>
          <Text style={{ color: '#fff', fontSize: 20 }}>Same Language: No</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#30444E',
    paddingLeft: 6,
    paddingRight: 6
  },

  backContainer: {
    flex: 1.5,
    backgroundColor: '#30444E',
    paddingTop: 100,
    paddingRight: 230
  },

  userNameContainer: {
    flex: 3,
    backgroundColor: '#30444E',
    paddingTop: 0,
    paddingLeft: 60
  },

  detailsContainer: {
    flex: 13,
    backgroundColor: '#30444E',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 80
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#FFC542',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
