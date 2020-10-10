import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

export class NotificationScreen extends React.Component<any, any> {
  render() {
    const colors = ['#FFC542', '#FF565E', '#3ED598'];

    const data = [
      {
        id: 1,
        name: 'Tan Ah Lian',
        status: 'HDB APPROVED',
        time: '4:20 AM',
        message: 'Ready to send for matching.'
      },
      {
        id: 2,
        name: 'Tan Ah Niu',
        status: 'Missed Counsellor appointments for 2 weeks.',
        time: '6:02 AM',
        message:
          'Client has not been attending counselling sessions. Have been uncontactable for the past 2 weeks.'
      },
      {
        id: 3,
        name: 'Donald Trump',
        status: 'Pending',
        time: '8:20 PM',
        message: 'Ready to send for matching.'
      }
    ];

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.tableContainer}
          data={data}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <View style={styles.textContainer}>
                <View style={[styles.profileCircle, {backgroundColor: colors[index]}]}>
                  <Text>👩</Text>
                </View>

                <View>
                  <View style={styles.textBox}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.timeText}>{item.time}</Text>
                  </View>
                  <View style={styles.textBox}>
                    <Text style={{ color: '#96A7AF' }}>{item.status}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.longTextBox}>
                <Text style={{ color: 'white' }}>{item.message}</Text>
              </View>

              <View style={styles.textContainer}>
                <View style={styles.userCircle}>
                  <Text>👩</Text>
                </View>
                <View style={styles.replyBox}>
                  <TextInput
                    style={styles.replyInput}
                    placeholder="Reply to Counsellor"
                  />
                  <TouchableOpacity
                    style={styles.replyBtn}
                    onPress={() => console.log('Message Sent')}
                  >
                    <Icon
                      name={'chevron-right'}
                      size={26}
                      color={'#fff'}
                    ></Icon>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => `${item.id}_${index}`}
        />
        <Button onPress={() => this.props.clearSession()} title="Log Out"/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearSession: () => dispatch({ type: 'CLEAR_SESSION'})
});

export default connect(null, mapDispatchToProps)(NotificationScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30444E'
  },
  profileCircle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6
  },
  userCircle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#3ED598',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6
  },
  tableContainer: {
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 10
  },
  itemContainer: {
    paddingVertical: 5,
    flexDirection: 'column',
    flex: 1,
    padding: 30,
    margin: 10,
    width: 370,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#30444E'
    // shadowOpacity: 0.7,
    // shadowOffset: { width: 10, height: 5 },
    // shadowRadius: 10,
    // shadowColor: '#000'
  },
  textContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    width: 250
  },
  textBox: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    width: 230
  },
  longTextBox: {
    flexDirection: 'column',
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  replyBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  replyInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    borderColor: '#30444E',
    padding: 10,
    marginLeft: 70,
    margin: 10,
    width: 220,
    color: '#fff',
    flexDirection: 'row'
  },
  replyBtn: {
    position: 'absolute',
    right: -38,
    top: 17
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  },
  timeText: {
    fontSize: 14,
    color: '#96A7AF'
  }
});
