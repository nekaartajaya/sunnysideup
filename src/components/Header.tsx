import {View, Text, SafeAreaView, Platform} from 'react-native';
import React from 'react';
import {Avatar} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {AuthState} from 'interfaces/auth';
import {StackActions, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PropsNavigation} from 'interfaces/navigation';
import styles from 'utils/styles';

const Header = () => {
  const navigation: PropsNavigation = useNavigation();
  const {user} = useSelector((state: AuthState) => state.auth);
  const onLogout = async () => {
    await AsyncStorage.removeItem('persist:root');
    navigation.dispatch(StackActions.replace('Login'));
  };
  return (
    <SafeAreaView className="bg-white z-[999]" style={styles.headerShadow}>
      <View
        className={`flex-row justify-between items-center px-3 ${
          Platform.OS === 'ios' ? 'py-2' : 'pt-8 pb-2'
        }`}>
        <View className="flex-row space-x-2 items-center">
          <Avatar
            size={50}
            rounded
            source={{
              uri: user?.image,
            }}
            containerStyle={{borderWidth: 1, borderColor: 'lightgrey'}}
          />
          <Text className="text-md font-bold">{user?.username}</Text>
        </View>
        <TouchableOpacity
          onPress={onLogout}
          className="border border-[#106EEA] px-2 py-1 rounded-[4px]">
          <Text className="text-[#106EEA]">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
