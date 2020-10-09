import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import CalendarScreen from './CalendarScreen';

const Tab = createBottomTabNavigator();

const CaseManagerContainer = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);

export default CaseManagerContainer
