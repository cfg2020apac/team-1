import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BeneficiaryList from './BeneficiaryList';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const HomeContainer = () => (
  <Stack.Navigator initialRouteName="BeneficiaryList">
    <Stack.Screen
      name="BeneficiaryList"
      component={BeneficiaryList}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: "",
        headerBackTitle: 'Back',
        headerStyle: { backgroundColor: '#30444E', shadowColor: "transparent" },
        headerTintColor: '#96A7AF'
      }}
    />
  </Stack.Navigator>
);

export default HomeContainer;
