import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import StudentDetailCard from '../cards/StudentDetailCard'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModalComponent from '../modal/ModalComponent';

const Stack = createNativeStackNavigator();

const StudentDetails = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([])
    const [selectedStudent, setSelectedStudent] = useState();
    const [modal, setModal] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [registeredDate, setRegisteredDate] = useState('')
    const [course, setCourse] = useState('')

    
   const getAllStudent = () => {
        axios.get('http://192.168.143.232:3000/api/v1/student')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }


    useEffect(() => {
        getAllStudent();
    }, [])

    const handleCardPress = (item) => {
        setSelectedStudent(item.std_id);


    }

    const handleImagePress = (item) => {
        // navigation.navigate('updatestudent',(item.std_id))
       handleEdit(item);

    }

    const handleUpdate = () => {
       axios.put(`http://192.168.143.232:3000/api/v1/student/${id}`,{
        std_id:id,
        name:name,
        address:address,
        registered_date:registeredDate,
        course:course
       }).then(res=>console.log(res)).
       then(getAllStudent()).
       then(setModal(false))
       .catch(err=>console.log(err))
}
    


    const handleEdit = (item) => {
        setId(item?.std_id)
        setName(item.name)
        setAddress(item.address)
        setRegisteredDate(item.registered_date)
        setCourse(item.course)
        setModal(true)
    }

    const handleClose = () =>{
        setModal(false)
    }



    return (
        <View>
            <ModalComponent
            modal={modal}
            setModal={setModal}
            handleUpdate={handleUpdate}
            handleClose={handleClose}
            id={id}
            setId={setId}
            name={name}
            setName={setName}
            address={address}
            setAddress={setAddress}
            registeredDate={registeredDate}
            setRegisteredDate={setRegisteredDate}
            course={course}
            setCourse={setCourse}
            />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Registered Students</Text>
            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <StudentDetailCard
                        item={item}
                        selectedStudent={selectedStudent}
                        handleCardPress={handleCardPress}
                        handleImagePress={handleImagePress}
                    />
                )}
                keyExtractor={(item) => item?.std_id}
                contentContainerStyle={{ rowGap: 16 }}
                horizontal
            />

        </View>


    )
}

export default StudentDetails;

const styles = StyleSheet.create({
    container: {
        margin: 20,

    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 16,
        //fontFamily: FONT.medium,
        color: "#312651",
        margin: 16
    },
    headerBtn: {
        fontSize: 16,

        color: "#83829A",
    },
    cardsContainer: {
        marginTop: 16,
    },
})

