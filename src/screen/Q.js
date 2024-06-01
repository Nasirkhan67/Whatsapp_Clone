import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import QStyle from './QStyle';
import React from 'react'

const Q = () => {
    const navigation = useNavigation(); // Get navigation object

  return (
    <View>
      

      <TouchableOpacity  onPress={()=> navigation.navigate('Login')}>
      <Image style={QStyle.back}  source={require('./q.png')}  />
      </TouchableOpacity>






    </View>
  )
}

export default Q

const styles = StyleSheet.create({})