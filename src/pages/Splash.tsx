import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {PropsNavigation} from 'interfaces';
import {StackActions} from '@react-navigation/native';

const Splash = ({navigation}: PropsNavigation) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'));
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
