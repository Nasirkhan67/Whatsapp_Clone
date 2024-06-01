
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../components/Home'
import Profile from '../components/Profile'
import Search from '../components/Search'
import Friends from '../components/Friends'
import { StatusBar } from 'react-native';
import MyFlatList from '../components/MyFlatList';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator style={{paddingTop:StatusBar.currentHeight,backgroundColor:'green'}} >
        <Tab.Screen options={{title:props => <Ionicons name="camera" size={28} color="black" />}}    component={Home} name='Home'/>
        
        <Tab.Screen component={Friends} name='CHATS'/>
        <Tab.Screen component={Search} name='STATUS'/>
        <Tab.Screen component={Profile} name='CALLS'/>
        
       
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({


})



export default AppNavigator


