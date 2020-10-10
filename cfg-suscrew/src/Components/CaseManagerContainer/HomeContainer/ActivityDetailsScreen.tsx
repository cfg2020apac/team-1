import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import {CheckBox} from 'react-native-elements'
import CalendarScreen from '../CalendarScreen';
import { ScrollView } from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Button } from 'native-base';
import { color } from 'react-native-reanimated';

export default function ActivityDetailsScreen({ navigation, route }) {
  const { person } = route.params;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#30444E', flexDirection: 'column' }}
    >
      <TouchableOpacity
        style={{
          flex: 0.15,
          flexDirection: 'row',
          padding: 24,
          marginVertical: 16
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 999999,
            backgroundColor: '#3ED598',
            justifyContent: 'center',
            marginRight: 24,
            alignItems: 'center'
          }}
        >
          <Image source={require('../../assets/images/first_avatar.png')} />
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 24
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 14 }}>{person.Name}</Text>
          <Text
            style={{
              color: '#DDDDDD',
              fontSize: 12,
              marginVertical: 11
            }}
          >{`Details >`}</Text>
        </View>
      </TouchableOpacity>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <ProgressSteps
          activeStepIconColor="#3DD598"
          completedStepIconColor="#3DD598"
          disabledStepNumColor="#333"
        >
          <ProgressStep
            label="Take Up Beneficiary"
            nextBtnStyle={{
              display: toggleCheckBox ? 'flex' : 'none',
              backgroundColor: '#7A3789',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 8
            }}
            nextBtnTextStyle={{
              color: '#ddd'
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
                paddingVertical: 64
              }}
            >
              <CheckBox
                title="Take Up Beneficiary"
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
                textStyle={{ color: '#fff', fontSize: 20 }}
                containerStyle={{backgroundColor: 'transparent'}}
              />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Sessions Schedules"
            nextBtnStyle={{
              display: toggleCheckBox ? 'flex' : 'none',
              backgroundColor: '#7A3789',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 8
            }}
            nextBtnTextStyle={{
              color: '#ddd'
            }}
            previousBtnStyle={{
              display: toggleCheckBox ? 'flex' : 'none',
              backgroundColor: '#FFC542',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 8
            }}
            previousBtnTextStyle={{
              color: '#333'
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
                paddingVertical: 64
              }}
            >
              <CalendarScreen person={person} />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Completed Counselling"
            nextBtnStyle={{
              display: 'none'
            }}
            nextBtnText="Approve"
            previousBtnStyle={{
              display: 'none'
            }}
          >
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#3ED598',
                marginHorizontal: 24,
                padding: 16,
                borderRadius: 8,
                height: 250
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: 12
                }}
              >
                Success!
              </Text>
              <Text style={{ color: '#333', fontSize: 16 }}>
                {person.Name} has successfully
              </Text>
              <Text style={{ color: '#333', fontSize: 16 }}>
                completed his couselling.
              </Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </SafeAreaView>
  );
}
