import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';


import React from 'react'
import OtpStyle from './OtpStyle'
const Otp2 = () => {
    const navigation = useNavigation(); // Get navigation object


  return (
    <View>
      

      <TouchableOpacity  onPress={()=> navigation.navigate('Code')}>
      <Image source={require('./Otp2.png')} style={OtpStyle.Image}  />
      </TouchableOpacity>

    </View>
  )
}

export default Otp2

const styles = StyleSheet.create({})