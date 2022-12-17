import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {PropsNavigation} from 'interfaces';
import {StackActions} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {AuthState} from 'interfaces/auth';

const Splash = ({navigation}: PropsNavigation) => {
  const {user} = useSelector((state: AuthState) => state.auth);
  useEffect(() => {
    setTimeout(() => {
      if (user) navigation.dispatch(StackActions.replace('Home'));
      else navigation.dispatch(StackActions.replace('Login'));
    }, 2000);
  }, []);

  return (
    <>
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text>Splash</Text>
      </SafeAreaView>
    </>
  );
};

export default Splash;
