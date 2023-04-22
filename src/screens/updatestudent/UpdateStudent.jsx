import { SafeAreaView, StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';


const UpdateStudent = ({navigation}) => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [registeredDate, setRegisteredDate] = useState('')
    const [course, setCourse] = useState('')


    const handleSubmit = () => {
      axios.post('http://192.168.143.232:3000/api/v1/student',{
        std_id:id,
        name:name,
        address:address,
        registered_date:registeredDate,
        course:course
      })
      .then(res=>console.log(res)).then(navigation.navigate('drawer'))
      .catch(err=>console.log(err))
    }



  return (
    <SafeAreaView>
        <View style={styles.imageContainer}>
          <Image style={styles.regLogo} source={require('../../assets/images/student.png')} />
        </View>
        <View>
        <Text style={styles.registerText}>Add New Student</Text>
        <View style={styles.inputFiledWrapper}>
            <AntDesign name='idcard' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
            <TextInput
              placeholder='Student ID Number'
              style={styles.textInput}
              autoCapitalize='none'
              value={id}
              onChangeText={text=>setId(text)}
           />
          </View>
          <View style={styles.inputFiledWrapper}>
            <AntDesign name='user' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
            <TextInput
              placeholder='Student Name'
              style={styles.textInput}
              autoCapitalize='none'
              value={name}
              onChangeText={text=>setName(text)}
           />
          </View>
          <View style={styles.inputFiledWrapper}>
            <MaterialIcons name='house' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
            <TextInput
              placeholder='Permanent Address'
              style={styles.textInput}
              autoCapitalize='none'
              value={address}
              onChangeText={text=>setAddress(text)}
           />
          </View>
          <View style={styles.inputFiledWrapper}>
            <MaterialIcons name='date-range' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
            <TextInput
              placeholder='Registered Date'
              style={styles.textInput}
              autoCapitalize='none'
              value={registeredDate}
              onChangeText={text=>setRegisteredDate(text)}
           />
          </View>

          <View style={styles.inputFiledWrapper}>
            <MaterialIcons name='computer' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
            <TextInput
              placeholder='Selected Course'
              style={styles.textInput}
              autoCapitalize='none'
              value={course}
              onChangeText={text=>setCourse(text)}
           />
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleSubmit}
          >
            <Text style={styles.regbuttonText}>Submit</Text>
          </TouchableOpacity>
        </View>


    </SafeAreaView>
  )
}

export default UpdateStudent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%'
    },

    imageContainer: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    regLogo: {
        width: 100,
        height: 100
    },

    formWrapper: {
        paddingHorizontal: 25
    },

    registerText: {
        fontSize: 28,
        fontWeight: 500,
        color: 'black',
        marginBottom: 40,
        textAlign: 'center'
    },

    inputFiledWrapper: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 20,
        marginHorizontal:16

    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

    registerButton: {
        backgroundColor: "#FE7654",
        padding: 12,
        borderRadius: 16,
        marginBottom: 30,
        marginTop: 20,
        marginHorizontal:16
    },

    regbuttonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18,
        color: 'white'
    },





})