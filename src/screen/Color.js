import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import ColorStyle from './ColorStyle'

const Color = () => {
  const navigation = useNavigation(); // Get navigation object

  const [sad, setsad] = useState(90)

  const [mirza, setmirza] = useState(90)

  const [img, setimg] = useState('https://fastly.picsum.photos/id/334/200/300.jpg?hmac=mY7moKpyBD1N0PF_abyW5_eUHxm9jV4JxZWPnxY7x3Q')

  const hit = () => {
    setsad('KHYBER')
    setmirza('black,blue,yellow')
  }

  return (
    <View style={ColorStyle.cs} >
      <TouchableOpacity onPress={() => hit()} style={{ backgroundColor: 'green' }}>
        {/* <Image style={ColorStyle.black} source={require('./Black.png')} /> */}
        <Text style={{ padding: 10, color: "black",marginTop:215 }}>{sad}</Text>

      </TouchableOpacity>

      <TextInput placeholder='Email' onChangeText={khan => setsad(khan)} style={{ padding: 10 }} />





      <TouchableOpacity onPress={() => hit()} style={{ backgroundColor: 'blue' }}>
        {/* <Image style={ColorStyle.black} source={require('./Black.png')} /> */}
        <Text style={{ padding: 10, color: "black",marginTop:215 }}>{mirza}</Text>

      </TouchableOpacity>

      <TextInput placeholder='Email' onChangeText={saad => setmirza(saad)} style={{ padding: 10 }} />
      
      
      <Image style={{ height: 200, width: 200, resizeMode: "center", marginTop: 240 }} source={{ uri: img }} />




      <View>






        <TouchableOpacity onPress={() => navigation.navigate('Page1')}>
          <Image style={ColorStyle.back} source={require('./White.png')} />
        </TouchableOpacity>







      </View>

    </View>
  )
}

export default Color

const styles = StyleSheet.create({})
// onPress={()=> navigation.navigate('Page1')}