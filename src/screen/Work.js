import { StyleSheet, Text, View ,TouchableOpacity,TextInput,} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CoddingStyle from './CoddingStyle';
import React from 'react'

const Work = () => {
    const navigation = useNavigation(); // Get navigation object

  return (
    <View >

        <TouchableOpacity style={CoddingStyle.icon}>
<Ionicons  name="arrow-back-outline" size={24} color="black" onPress={() => navigation.navigate('Code')} />
<Text style={CoddingStyle.txt}>Enter OTP Code</Text>
</TouchableOpacity>


<View >


<Text style={CoddingStyle.te}>Code has been send to +91 11******44</Text>

</View>



<View style={CoddingStyle.f}>



<TouchableOpacity >
            <TextInput keyboardType='number-pad' placeholder='' placeholderTextColor={'#000'} style={CoddingStyle.pad} />
              
            </TouchableOpacity>


            <TouchableOpacity >
            <TextInput keyboardType='number-pad' placeholder='' placeholderTextColor={'#000'} style={CoddingStyle.pad} />
              
            </TouchableOpacity>




            <TouchableOpacity >
            <TextInput keyboardType='number-pad' placeholder='' placeholderTextColor={'#000'} style={CoddingStyle.pad} />
              
            </TouchableOpacity>



            <TouchableOpacity >
            <TextInput keyboardType='number-pad' placeholder='' placeholderTextColor={'#000'}style={CoddingStyle.pad} />
              
            </TouchableOpacity>


</View>
<View style={CoddingStyle.G} >
     <Text style={CoddingStyle.N}>
     Resend Code in </Text>
   <Text style={CoddingStyle.K}>56</Text>
   <Text style={CoddingStyle.M}>s</Text>


     </View>


<View>


    

<TouchableOpacity style={CoddingStyle.btn}>
<Text style={CoddingStyle.tn}  onPress={()=> navigation.navigate('Black')}>verify</Text>
</TouchableOpacity>

</View>


    </View>
  )
}

export default Work

const styles = StyleSheet.create({})