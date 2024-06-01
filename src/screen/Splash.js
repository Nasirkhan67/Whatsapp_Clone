import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'

import externalStyle from './externalStyle'
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import React, { useEffect } from 'react'

// const Splash = ({ navigation }) => {
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.navigate('Page1')
//     }, 10);
//   }, [])
const Splash = ()=>{
  const navigation = useNavigation(); // Get navigation object



  return (
    
    <View style={externalStyle.background}>
      <View>

      <Image source={require('./Vector.png')} style={externalStyle.image} />

      
      <Image source={require('./vol.png')} style={externalStyle.Image} />


      
<TouchableOpacity   onPress={()=> navigation.navigate('Page1')}>
      <Image source={require('./pics.png')} style={externalStyle.logo} />
      </TouchableOpacity>

     
      


      <Image source={require('./pic.png')} style={externalStyle.exp}  />

      
      <Image source={require('./picture.png')}  />


    </View>
    
    </View>
  )
}

export default Splash

