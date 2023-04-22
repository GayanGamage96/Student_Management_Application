import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import styles from './register.style';
import axios from 'axios';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';


const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [data, setData] = useState({
        secureTextEntry: true
  });

  // const handlePasswordChange = ()=> {
  // setData({
  //   ...data,
  //   password: data.password
  // })
  // };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const handleSubmit = async () => {
    if(email && password){
      try{
           await createUserWithEmailAndPassword(auth, email,password);
      }catch(err){
        console.log('got error :' ,err.message)
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.regLogo} source={require('../../assets/images/regimage.png')} />
        </View>

        <View style={styles.formWrapper}>
          <Text style={styles.registerText}>Create Your Account</Text>

          <View style={styles.inputFiledWrapper}>
            <FontAwesome name='user' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
            <TextInput
              placeholder='User Name'
              style={styles.textInput}
              autoCapitalize='none'
              value={data.userName}
              onChangeText={(value) => setData(value)}
            />
          </View>


          <View style={styles.inputFiledWrapper}>
            <MaterialIcons name='email' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
            <TextInput
              placeholder='Email Address'
              style={styles.textInput}
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => setEmail(value)} />


          </View>


          <View style={styles.inputFiledWrapper}>
            <Ionicons name='ios-lock-closed-outline' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
            <TextInput
              placeholder='Password'
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ?
                <Feather name='eye' color='grey' size={20} />
                :
                <Feather name='eye-off' color='grey' size={20} />
              }
            </TouchableOpacity>

          </View>


          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleSubmit}
          >
            <Text style={styles.regbuttonText}>Register</Text>
          </TouchableOpacity>


          <View style={styles.footer}>
            <Text style={styles.footerText}>Already Registered?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
              <Text style={styles.footerText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register;

