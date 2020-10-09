import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alert,
  TextInput
} from 'react-native';
// import DatePicker from 'react-native-date-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ScrollView } from 'react-native-gesture-handler';

export default function CalendarScreen({ person }) {
  const [comment, setComment] = useState(null);
  const [sessionsList, setSessionsList] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const newAppt = {
      dateTime: date,
      comment: ''
    };
    setSessionsList([...sessionsList, newAppt]);
    hideDatePicker();
  };

  useEffect(() => {}, [sessionsList]);

  // console.log(sessionsList[0]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5
            }}
          >
            <Text
              style={{
                marginBottom: 15,
                textAlign: 'center'
              }}
            >
              Hallo! Key in your comment here!
            </Text>
            <TextInput
              multiline={true}
              style={{
                height: 40,
                width: 200,
                marginBottom: 16,
                borderColor: 'gray',
                borderWidth: 1
              }}
              onChangeText={(text) => setComment(text)}
              value={comment}
            />
            <TouchableHighlight
              style={{
                backgroundColor: '#F194FF',
                borderRadius: 20,
                padding: 10,
                elevation: 2
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                Add Comment
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={{
          backgroundColor: '#7A3789',
          paddingVertical: 8,
          paddingHorizontal: 8,
          borderRadius: 8,
          alignSelf: 'flex-end',
          marginRight: 24,
          marginTop: -40,
          marginBottom: 40
        }}
        onPress={showDatePicker}
      >
        <Text style={{ color: '#fff' }}>Set New Appointment</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {sessionsList.length === 0 ? (
        <>
          <Text style={{ color: '#ddd' }}>
            You have no appointments with {person.name} yet.
          </Text>
        </>
      ) : (
        <ScrollView>
          {sessionsList.map((item, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#425660',
                paddingVertical: 16,
                paddingHorizontal: 16,
                marginBottom: 16,
                borderRadius: 8,
                flexWrap: 'nowrap'
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <View style={{ flexDirection: 'column', marginRight: 40 }}>
                  <Text style={{ color: '#fff', fontSize: 18 }}>
                    {item.dateTime.toString().slice(4, 21)}
                  </Text>
                  <Text
                    style={{ color: '#ddd', fontSize: 14, flexWrap: 'wrap' }}
                  >
                    {comment === null ? 'No Comments Yet' : comment}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    padding: 16,
                    borderRadius: 16,
                    backgroundColor: '#3ED598'
                  }}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  <Text style={{ fontSize: 14, color: '#333' }}>
                    Add Comment
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
