


import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyFlatList from './MyFlatList'; // Assuming MyFlatList is defined in a separate file




export default function App(){
  const navigation = useNavigation(); // Get navigation object

const animals = [
 
  


  {
    id:1,
    name:'Abelson',
    image: require('./ma.png'),
    screen: 'Chat',
  },
  
  {
    id:2,
    name:'Nasir',
    image: require('./dep.png'),
    screen: 'Nasir',
  },
  
  
  {
    id:3,
    name:'Salman',
    image: require('./profile.png'),
    screen: 'Code',
  },
  
  
  {
    id:4,
    name:'Waqar',
    image: require('./Gear.png'),
    screen: 'Code'
  },
  
  {
    id:5,
    name:'Hassan',
    image: require('./rose.png'),
    screen: 'Code'
  },
  
  {
    id:6,
    name:'Fahd',
    image: require('./magical.png'),
    screen: 'Code'
  },
  
  
  {
    id:7,
    name:'Saad',
    image: require('./cuk.png'),
    screen: 'Code'
  },
  
  {
    id:8,
    name:'Rehman',
    image: require('./tree.png'),
    screen: 'Code'
  },
  
  ];

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
//);
const navigateToScreen = (screenName) => {
  navigation.navigate(screenName);
};


const oneAnimal =({item}) => (
  <TouchableOpacity onPress={() => navigateToScreen(item.screen)}>
   
    <View style={styles.item}>
<View tyle={styles.avatarContainer}>
<Image source={item.image} style={styles.avatar} />
</View>
  
  <Text style={styles.name}>{item.name}</Text>
  
</View>
</TouchableOpacity>

)
headerComponent = () =>{
  return<Text style={styles.ListHeadLine} ></Text>
}
ItemSeparator =() => {
return <View style={styles.separator} />
}



  return (
    <SafeAreaView style={styles.container}>
       
      <FlatList
      ListHeaderComponentStyle={styles.ListHeader}
      ListHeaderComponent={headerComponent}
        data={animals}
        renderItem={ oneAnimal }
        ItemSeparatorComponent={ ItemSeparator}
        ListEmptyComponent={<Text>This is a very flat list</Text>}
             />
             
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   marginTop: StatusBar.currentHeight || 0,
  // },
  // item: {
  //   backgroundColor: 'blue',
  //   padding: 20,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  // },
  // title: {
  //   fontSize: 32,
  // },



ListHeadLine:{
color:'#333',
fontSize:21,
fontWeight:'bold'
},

item:{
  flex:1,
  flexDirection:'row',
  paddingVertical:13,
  marginLeft:10
},
avatarContainer:{

backgroundColor:'#D9D9D9',
borderRadius: 100,
height:89,
width:89,
justifyContent:'center',
alignItems:'center'


},
avatar:{
height:55,
width:55,
borderRadius:30


},

name:{
fontWeight:'600',
fontSize:16,
marginLeft:13,
},

separator:{
  height:1,
  width:'100%',
  backgroundColor:'#CCC',
},







});



