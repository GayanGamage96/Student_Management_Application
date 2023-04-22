import { View,SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import StudentDetails from '../../components/homecomponents/StudentDetails';
import Welcome from '../../components/homecomponents/welcome/Welcome';
import Footer from '../../components/footer/Footer';


const Home = ({navigation}) => {

  const handleNavigate = () => {
      navigation.navigate('addstudent')
  }

  

  // const handleCardPress = () => {
  //   setSelectedStudent(item.std_id);
  //   navigation.navigate('updatestudent');

  // }

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.componentWrapper}>
          <Welcome />
      </View>
      <StudentDetails/>
      <Footer
      handleNavigate={handleNavigate}
      
      />
    </SafeAreaView>
    
   
     
    
  )
}

export default Home;



styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FAFAFC"
  },
  componentWrapper:{
    //flex:1,
    padding:16,
    marginTop:20,
    marginBottom:20
  },

  wrapper2:{
    marginTop:'10%'
  }
})