import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import ChatStyle from './ChatStyle'
const Chat = () => {
  return (
    <View>
      


      <TouchableOpacity >
      <Image style={ChatStyle.Image} source={require('./MESSAGE.png')}  />
      
      </TouchableOpacity>


    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})