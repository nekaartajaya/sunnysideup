import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from 'pages/Splash';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import ProductDetail from 'pages/ProductDetail';

export type StackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  Splash: undefined;
  ProductDetail: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return <StackScreen />;
};

export default Router;
