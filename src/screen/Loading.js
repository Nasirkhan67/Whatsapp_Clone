import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import OtpStyle from './OtpStyle';
import React from 'react'

const Loading = () => {
    const navigation = useNavigation(); // Get navigation object

  return (
    <View>
       <TouchableOpacity  onPress={()=> navigation.navigate('Otp2')}>
      <Image source={require('./loading.png')} style={OtpStyle.Image}  />
      </TouchableOpacity>

    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})