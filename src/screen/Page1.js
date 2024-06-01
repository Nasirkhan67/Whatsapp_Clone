import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import page1Style from './page1Style'


import React, { useEffect } from 'react'

const Page1 =({ navigation }) => {
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.navigate('Page2')
//     }, 100);
//   }, [])



  return (
    <View >

<TouchableOpacity onPress={()=> navigation.navigate('Page2')}>
        <Image source={require('./PAGE.png')} style={page1Style.back} />
        </TouchableOpacity>
    </View>
  )
}

export default Page1

const styles = StyleSheet.create({})