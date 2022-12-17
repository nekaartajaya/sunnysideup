import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Avatar} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {AuthState} from 'interfaces/auth';

const Header = () => {
  const {user} = useSelector((state: AuthState) => state.auth);
  return (
    <SafeAreaView className="bg-white mb-2">
      <View className="flex-row justify-between items-center py-2 px-3">
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
        <TouchableOpacity className="border border-[#106EEA] px-2 py-1 rounded-[4px]">
          <Text className="text-[#106EEA]">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
