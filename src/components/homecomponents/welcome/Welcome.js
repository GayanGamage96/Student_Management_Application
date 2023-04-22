import { View, Text,TextInput,Image,TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './welcome.style'


const courses = ["AMAD" ,"Web Development","APJD",'Python']


const Welcome = () => {
  const [activeCoure, setActiveCourse] = useState("AMAD")
  return (
    <View>
        <View style={styles.container}>
        <Text style={styles.userName}>ACPT ACADEMY</Text>
        <Text style={styles.welcomeMessage}>Student Management Platform</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            
            onChangeText={()=>{}}
            placeholder='What are you Looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
          source={require('../../../assets/icons/search.png')}
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <Text style={{textAlign:'center',marginTop:20,fontWeight:'700',color:'gray'}}>Courses at ACPT</Text>
      <View style={styles.tabsContainer}>
        
        <FlatList
        data={courses}
        renderItem={({item})=>(
          <TouchableOpacity
          style={styles.tab(activeCoure, item)}
          onPress={()=>{
            setActiveCourse(item)
          }}
        >
            <Text style={styles.tabText(activeCoure,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:10}}
        horizontal
        />
      </View>
      
    </View>
  )
}

export default Welcome