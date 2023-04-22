import { SafeAreaView,Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './login.style';
import axios from 'axios';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if(email && password){
      try{
           await signInWithEmailAndPassword(auth, email,password);
      }catch(err){
        console.log('got error :' ,err.message)
      }
    }
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.coverImage} source={require('../../assets/images/cover.png')} />
      </View>

      <Text style={styles.loginText}> Login Here</Text>

      <View style={styles.inputFieldWrapper}>
        <View style={styles.formInputWrapper}>
          <MaterialIcons name='email' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
          <TextInput
            placeholder='E-mail address'
            style={styles.textInput}
            keyboardType="email-address"
            value={email}
            onChangeText={text=>setEmail(text)}
            />
        </View>

        <View style={styles.formInputWrapper}>
          <Ionicons name='ios-lock-closed-outline' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
          <TextInput
            placeholder='Password'
            style={styles.textInput}
            secureTextEntry={true}
            value={password}
            onChangeText={text=>setPassword(text)}
          />

          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.footerText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
        style={styles.loginButton}
        onPress={handleSubmit}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.textStyle}>Or Login With..</Text>

        <TouchableOpacity style={styles.googleIconButton}>
          <Image style={styles.googleImage} source={require('../../assets/images/google.png')} />
        </TouchableOpacity>


        <View style={styles.footer}>
          <Text style={styles.footerText}>New User?</Text>

          <TouchableOpacity >
            <Text style={styles.footerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login;

