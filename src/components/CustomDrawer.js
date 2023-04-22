import {StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';



const CustomDrawer = (props) => {
    const handleLogOut= async () => {
        await signOut(auth);
    }


  return (
    <View style={styles.container}>
   <DrawerContentScrollView{...props} contentContainerStyle={styles.drawer}>
   <Image source={require('../assets/images/newuser.png')} style={styles.image} />
   <View style={styles.drawerItemListView}>
    <DrawerItemList {...props}>

    </DrawerItemList>
    </View>
   </DrawerContentScrollView>
   <View style={styles.logoutBtnContainer}>
    <TouchableOpacity style={styles.logOutBtn} onPress={handleLogOut}  >
        <View style={styles.btnView}>
            <Ionicons name="exit-outline" size={22} />
      
      <Text>Sign Out</Text>
      </View>
    
    </TouchableOpacity>
    
   </View>
   </View>
  )
}

export default CustomDrawer;

const styles = StyleSheet.create({
container:{
    flex:1
},

drawer:{
    backgroundColor:"#ff8500"
},

image:{
    width:60,
    height:60,
    borderRadius:40,
    marginBottom:30,
    marginTop:20
},

drawerItemListView:{
    flex:1,
    backgroundColor:'#fff',
    paddingTop:10
},

logoutBtnContainer:{
    padding:20,
    borderTopWidth:1,
    borderColor:'#ccc'
},

logOutBtn:{
    paddingVertical:15
},

btnView:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
}


})