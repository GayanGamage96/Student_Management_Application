import {Text, View , TouchableOpacity } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';
import styles from './splash.screen.style';


const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
       <Animatable.Image 
       animation="bounceIn"
       source={require('../../assets/images/logosplash.png')}
       style={styles.logo}
       resizeMode='stretch'
       />
      </View>

      <Animatable.View 
      animation="fadeInUpBig"
      style={styles.footer}>
        
        <Text style={styles.title}>Manage your students in Smart Ways!</Text>
        <Text style={styles.text}>Sign in With account</Text>

        <View style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
          <LinearGradient colors={[ "#FE7654",  "#FE7654"]} style={styles.signIn}>
        <Text style={styles.textSign}>Get Started</Text>
        <MaterialIcons 
        name='navigate-next'
        color='#fff'
        size={20} />
        </LinearGradient>
        </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

export default SplashScreen;