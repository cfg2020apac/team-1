import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Components/HomeScreen/HomeScreen';
import NotificationScreen from "./src/Components/NotificationScreen";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

