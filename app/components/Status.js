import { StyleSheet, Text, View,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import StatusStyle from './StatusStyle';
import React from 'react'

const Status = () => {
    const navigation = useNavigation(); // Get navigation object

  return (
    <View style={StatusStyle.back}>
      
      <Image style={StatusStyle.Image} source={require('./status.png')}  />
      
    </View>
  )
}

export default Status

const styles = StyleSheet.create({})