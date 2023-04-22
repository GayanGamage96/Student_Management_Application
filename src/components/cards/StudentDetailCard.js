import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './studentdetailcard.style';

const StudentDetailCard = ({item,selectedStudent,handleCardPress,handleImagePress}) => {
  return (
    

    <TouchableOpacity
      style={styles.container(selectedStudent,item)}
      onPress={()=>handleCardPress(item)}
      >
      <TouchableOpacity 
      onPress={()=>handleImagePress(item)}
      style={styles.logoContainer(selectedStudent,item)}>
        <Image
          source={require('../../assets/images/student.png')}
          resizeMode='contain'
          style={styles.logoImage}
          
        />
       </TouchableOpacity>
       <Text style={styles.companyName} numberOfLines={1} >{item.name}</Text>
      
     <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedStudent,item)} numberOfLines={2}>
          {item.course}
        </Text>
        <Text style={styles.location}>
          {item.address}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default StudentDetailCard;