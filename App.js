
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screen/Splash';
import Page1 from './src/screen/Page1';
import Page2 from './src/screen/Page2';
import Welcome from './src/screen/Welcome';
import Login from './src/screen/Login';
import Q from './src/screen/Q';  
import Jv from './src/screen/Jv';
import Js from './src/screen/Js';
import Otp from './src/screen/Otp';
import Otp2 from './src/screen/Otp2';
import Code from './src/screen/Code';

import Black from './src/screen/Black';
import Work from './src/screen/Work';
import Tab5 from './Tab5';
import AppNavigator from './app/navigation/AppNavigator';
import Home from './app/components/Home';
import Friends from './app/components/Friends';
import Profile from './app/components/Profile';
import Search from './app/components/Search';
import Chat from './src/screen/Chat';
import Status from './app/components/Status';
import Nasir from './app/components/Nasir';
import Color from './src/screen/Color';




export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='screen,' screenOptions={{ headerShown: false }}> 
      
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Q" component={Q} />
        <Stack.Screen name="Jv" component={Jv} />
        <Stack.Screen name="Js" component={Js} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Otp2" component={Otp2} />
        <Stack.Screen name="Code" component={Code} />
        <Stack.Screen name="Work" component={Work} />
        <Stack.Screen name="Black" component={Black} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="Nasir" component={Nasir} />                          
        <Stack.Screen name="Color" component={Color} />
        
        
         


      </Stack.Navigator> 
    </NavigationContainer>
  );
}

