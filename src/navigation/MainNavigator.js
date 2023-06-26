import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../screens/GetStarted';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='GetStarted' >
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}