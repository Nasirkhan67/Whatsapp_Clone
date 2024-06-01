import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import QStyle from './QStyle';
import React from 'react'

const Black = () => {
    const navigation = useNavigation(); // Get navigation object

  return (
    <View>
      
      <TouchableOpacity  onPress={()=> navigation.navigate('AppNavigator')}>
      <Image style={QStyle.back}  source={require('./loading.png')}  />
      </TouchableOpacity>

    </View>
  )
}

export default Black

const styles = StyleSheet.create({})