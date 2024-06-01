import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import NStyle from './NStyle'
const Nasir = () => {
  return (
    <View>
      <Image style={NStyle.Image} source={require('./nasir.png')}  />
      
    </View>
  )
}

export default Nasir

const styles = StyleSheet.create({})