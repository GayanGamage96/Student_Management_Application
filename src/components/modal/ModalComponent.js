import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const ModalComponent = ({modal,handleUpdate,handleClose,name,setName,address,setAddress,registeredDate,setRegisteredDate,course,setCourse}) => {
  
  return (

    <Modal
      animationType="slide"
      transparent={true}
      visible={modal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.imageContainer}>
            <Image style={styles.regLogo} source={require('../../assets/images/student.png')} />
          </View>
          <View>
            <Text style={styles.registerText}>Student Details</Text>
           
            <View style={styles.inputFiledWrapper}>
              <AntDesign name='user' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
              <TextInput
                placeholder='Selected Course'
                style={styles.textInput}
                autoCapitalize='none'
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.inputFiledWrapper}>
              <MaterialIcons name='house' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
              <TextInput
                placeholder='Permanent Address'
                style={styles.textInput}
                autoCapitalize='none'
                value={address}
                onChangeText={text => setAddress(text)}
              />
            </View>
            <View style={styles.inputFiledWrapper}>
              <MaterialIcons name='date-range' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
              <TextInput
                placeholder='Registered Date'
                style={styles.textInput}
                autoCapitalize='none'
                value={registeredDate}
                onChangeText={text => setRegisteredDate(text)}
              />
            </View>

            <View style={styles.inputFiledWrapper}>
              <MaterialIcons name='computer' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
              <TextInput
                placeholder='Selected Course'
                style={styles.textInput}
                autoCapitalize='none'
                value={course}
                onChangeText={text => setCourse(text)}
              />
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleUpdate}
            >
              <Text style={styles.regbuttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={handleClose}
            >
              <Text style={{color:'orange'}} >close</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>


  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width:'90%',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  container: {
    flex: 1,
    width: '100%'
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
    marginHorizontal: 16

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
    marginHorizontal: 16
  },

  regbuttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    color: 'white'
  },


});

export default ModalComponent;