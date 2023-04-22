import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/login/Login'
import Register from './src/screens/register/Register'
import SplashScreen from './src/screens/splashscreen/SplashScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home/Home'
import useAuth from './src/hooks/useAuth'
import MyDrawer from './src/routes/Mydrawer'
import AddStudent from './src/screens/addStudent/AddStudent'
import UpdateStudent from './src/screens/updatestudent/UpdateStudent'

const Stack = createNativeStackNavigator();

const App = () => {

  const {user} = useAuth()
  if(user){
    return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="drawer" component={MyDrawer} options={{headerShown:false}} />
        <Stack.Screen name="addstudent" component={AddStudent} options={{headerShown:false}} />
        <Stack.Screen name="updatestudent" component={UpdateStudent} getId={({params})=>params.std_id} options={{headerShown:false}} />
       </Stack.Navigator>
      </NavigationContainer>
      
    )

  }else{
    return (
    
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
      
    )

  }
  
}

export default App

