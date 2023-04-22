import { createDrawerNavigator } from '@react-navigation/drawer';
import User from '../screens/user/User';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home/Home';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props=><CustomDrawer{...props}/>}
    screenOptions={{
      headerShown:false ,
      drawerLabelStyle:{marginLeft:-25},
      drawerActiveBackgroundColor:"#FE7654",
      drawerInactiveTintColor:'#333',
      drawerActiveTintColor:'#fff'
    }}
    >
      <Drawer.Screen name="Home" component={Home} 
      options={{
        drawerIcon:({color})=>(
          <Ionicons name="home-outline" size={22} Color={color} />
        )
      }}
    />
      <Drawer.Screen name="user" component={User}
      options={{
        drawerIcon:({color})=>(
            <Ionicons name="person-outline" size={22} Color={color} />
        )
    }} 
      
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;