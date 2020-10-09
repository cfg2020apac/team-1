import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NotificationScreen from '../NotificationScreen';
import CalendarScreen from './CalendarScreen';
import HomeContainer from './HomeContainer/HomeContainer';

const Tab = createBottomTabNavigator();

const CaseManagerContainer = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: '#425660' },
        activeTintColor: '#3DD598',
        inactiveTintColor: '#96A7AF'
      }}
    >
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-blank"
              size={24}
              color={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default CaseManagerContainer;
