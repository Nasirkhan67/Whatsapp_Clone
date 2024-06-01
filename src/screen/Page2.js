import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import React from 'react'
import page1Style from './page1Style'


const Page2 = () => {
    const navigation = useNavigation(); // Get navigation object

  return (
    <View>

<TouchableOpacity onPress={()=> navigation.navigate('Welcome')}>
        
<Image source={require('./2NDPAGE.png')} style={page1Style.back}  />
</TouchableOpacity>
    </View>
  )
}

export default Page2

const styles = StyleSheet.create({})