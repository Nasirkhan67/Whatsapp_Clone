import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import OtpStyle from './OtpStyle';
const Code = () => {
    const navigation = useNavigation(); // Get navigation object

  return (
    <View>
      
      <TouchableOpacity  onPress={()=> navigation.navigate('Work')}>
      <Image source={require('./Code.png')} style={OtpStyle.Image}  />
      </TouchableOpacity>



    </View>
  )
}

export default Code

const styles = StyleSheet.create({})