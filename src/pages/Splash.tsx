import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {PropsNavigation} from 'interfaces';
import {StackActions} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {AuthState} from 'interfaces/auth';
import {getUserAPI} from 'api/userAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}: PropsNavigation) => {
  const {user} = useSelector((state: AuthState) => state.auth);

  // TODO : replace this with function refresh token
  const [isReady, setIsReady] = useState<boolean>(false);
  const [expired, setExpired] = useState<boolean>(false);
  const getUser = async () => {
    const resp = await getUserAPI();
    console.log({resp});
    if (resp?.status === 401) {
      await AsyncStorage.removeItem('persist:root');
      setExpired(true);
    }
    setIsReady(true);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    isReady &&
      setTimeout(() => {
        if (user && !expired) navigation.dispatch(StackActions.replace('Home'));
        else navigation.dispatch(StackActions.replace('Login'));
      }, 2000);
  }, [isReady]);

  return (
    <>
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text>Splash</Text>
      </SafeAreaView>
    </>
  );
};

export default Splash;
