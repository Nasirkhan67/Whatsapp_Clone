import { StyleSheet, Text, TouchableOpacity, View,Image ,TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import WelStyle from './WelStyle';
import React from 'react'


const Welcome = () => {
    const navigation = useNavigation(); // Get navigation object

  return (
    <View>
      


      
      <Text style={WelStyle.txt}>Welcome to WhatsApp</Text>


     
      <Image source={require('./image1.png')} style={WelStyle.back}  />
      
<View style={WelStyle.fl}>     
   <Text>Read our </Text>
      <Text style={WelStyle.Color}>Privacy Policy. </Text>
      <Text>Tap “Agree and continue” to </Text>
      </View>
      <View style={WelStyle.gl}>     
  
      <Text> accept the </Text>
      <Text style={WelStyle.Color}>Teams of Service.</Text>
    </View>

    
    
<TouchableOpacity style={WelStyle.btn}>
<Text  style={WelStyle.t}  onPress={()=> navigation.navigate('Login')}>AGREE AND CONTINUE</Text>
</TouchableOpacity>

</View>
  )
}

export default Welcome

const styles = StyleSheet.create({})