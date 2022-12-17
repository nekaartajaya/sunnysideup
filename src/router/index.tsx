import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Splash from 'pages/Splash';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signup from 'pages/Signup';

export type StackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  Splash: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: config as any,
          close: config as any,
        },
      }}>
      {}
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
    </Stack.Navigator>
  );
};

const Router = () => {
  return <StackScreen />;
};

export default Router;
