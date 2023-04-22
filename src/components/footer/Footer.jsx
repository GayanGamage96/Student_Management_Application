import React from 'react'
import { View, Text,TouchableOpacity,Image} from 'react-native'

import styles from './footer.style'

const Footer = ({handleNavigate,handleUpdate}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={handleUpdate}
      style={styles.likeBtn}>
        <Image 
        source={require('../../assets/icons/left.png')}
        resizeMode='contain'
        style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.applyBtn}
      onPress={handleNavigate}
      >
        <Text style={styles.applyBtnText}>Add New Student</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer