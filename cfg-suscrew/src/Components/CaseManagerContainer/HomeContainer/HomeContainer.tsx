import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BeneficiaryList from './BeneficiaryList';
import ProfileScreen from './ProfileScreen';
import MatchScreen from './MatchScreen';
import ActivityDetailsScreen from './ActivityDetailsScreen';

const Stack = createStackNavigator();

const HomeContainer = () => (
  <Stack.Navigator initialRouteName="Beneficiary">
    <Stack.Screen
      name="Beneficiary"
      component={BeneficiaryList}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: '',
        headerBackTitle: 'Back',
        headerStyle: { backgroundColor: '#30444E', shadowColor: 'transparent' },
        headerTintColor: '#96A7AF'
      }}
    />
    <Stack.Screen
      name="Match"
      component={MatchScreen}
      options={{
        title: '',
        headerBackTitle: 'Back',
        headerStyle: { backgroundColor: '#30444E', shadowColor: 'transparent' },
        headerTintColor: '#96A7AF'
      }}
    />
    <Stack.Screen
      name="ActivityDetails"
      component={ActivityDetailsScreen}
      options={{
        title: 'Activity Details',
        headerBackTitle: 'Back',
        headerStyle: { backgroundColor: '#30444E', shadowColor: 'transparent' },
        headerTintColor: '#96A7AF'
      }}
    />
  </Stack.Navigator>
);

export default HomeContainer;
