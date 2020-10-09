import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotificationScreen from './NotificationScreen';
import CalendarScreen from './CalendarScreen';
import HomeContainer from './HomeContainer/HomeContainer';

const Tab = createBottomTabNavigator();

const CaseManagerContainer = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default CaseManagerContainer;
