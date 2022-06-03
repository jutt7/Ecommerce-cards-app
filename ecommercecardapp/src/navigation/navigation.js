import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import Chats from '../screens/Chats';
import ChatScreen from '../screens/ChatScreen';
import Login from '../screens/Login';
import Notifications from '../screens/Notifications';
import Product from '../screens/Product';
import Profile from '../screens/Profile';
import SearchProduct from '../screens/SearchProduct';
import SignUp from '../screens/SignUp';
import CustomDrawer from '../components/CustomDrawer';
import Splash from '../screens/Splash';
// import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      options={{headerShown: false}}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chats"
        component={Chats}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchProduct"
        component={SearchProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DrawerScreensStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile Detail" component={Contact} />
      <Stack.Screen name="Profile Detail" component={Contact} />
      <Stack.Screen name="Profile Detail" component={Contact} />
      <Stack.Screen name="Profile Detail" component={Contact} />
      <Stack.Screen name="Profile Detail" component={Contact} />
    </Stack.Navigator>
  );
};

export {RootStack, DrawerScreensStack};
