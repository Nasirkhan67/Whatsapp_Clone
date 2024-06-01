import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import OtpStyle from './OtpStyle'
import React from 'react'

const Otp = () => {
    const navigation = useNavigation(); // Get navigation object

  return (
    <View>
      <TouchableOpacity  onPress={()=> navigation.navigate('Otp2')}>
      <Image source={require('./Otp.png')} style={OtpStyle.Image}  />
      </TouchableOpacity>

    </View>
  )
}

export default Otp

const styles = StyleSheet.create({})