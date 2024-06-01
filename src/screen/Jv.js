import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import JvStyle from './JvStyle'
import { useNavigation } from '@react-navigation/native';

const Jv = () => {
    const navigation = useNavigation(); // Get navigation object

  return (
    <View>
      

      <TouchableOpacity  onPress={()=> navigation.navigate('Js')}>
      <Image style={JvStyle.back}  source={require('./jv.png')}  />
      </TouchableOpacity>


    </View>
  )
}

export default Jv

const styles = StyleSheet.create({})