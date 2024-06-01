import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import React from 'react'
import QStyle from './QStyle'
const Js = () => {
    const navigation = useNavigation(); // Get navigation object

  return (
    <View>
        

      <TouchableOpacity  onPress={()=> navigation.navigate('Otp')}>
      <Image style={QStyle.back}  source={require('./Js.png')}  />
      </TouchableOpacity>


    </View>
  )
}

export default Js

const styles = StyleSheet.create({})