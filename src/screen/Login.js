import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState,useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import logStyle from './logStyle';

const Login = () => {
  const navigation = useNavigation(); // Get navigation object


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch country data from the API
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Extract country names and codes
        const countries = data.map(country => ({
          label: country.name.common,
          value: country.cca2,
        }));
        // Set the items array with the country data
        setItems(countries);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  return (
    <View style={logStyle.back}>
   
      <View style={logStyle.text}>
        <Text>Enter your phone number</Text>
        <Entypo style={logStyle.icon} name="dots-three-vertical" size={20} color="black" />
      </View>
      <View>
        <Text style={logStyle.Text}>WhatsApp will need to verify your phone number. What’s my number?</Text>
      </View>
      <View style={logStyle.pick}>
      <DropDownPicker style={logStyle.down}

      
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        
      />
      <View style={logStyle.F}>
      
      <TextInput keyboardType="phone-pad" style={logStyle.l} placeholder='' />
      </View>

      <View style={logStyle.nex}>
        <TextInput keyboardType='phone-pad' style={logStyle.line} placeholder='+' />
        <TextInput keyboardType="phone-pad" style={logStyle.lx} placeholder='' />
      </View>

      <TouchableOpacity style={logStyle.btn}>
        <Text style={logStyle.tn} onPress={() => navigation.navigate('Jv')}>NEXT</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({});
 
