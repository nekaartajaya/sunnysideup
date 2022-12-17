import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Avatar} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row justify-between items-center py-2 px-3">
        <View className="flex-row space-x-2 items-center">
          <Avatar
            size={50}
            rounded
            source={{
              uri: 'https://robohash.org/autquiaut.png?size=50x50&set=set1',
            }}
            containerStyle={{borderWidth: 1, borderColor: 'lightgrey'}}
          />
          <Text className="text-md font-bold">kminchelle</Text>
        </View>
        <TouchableOpacity className="border border-[#106EEA] px-2 py-1 rounded-[4px]">
          <Text className="text-[#106EEA]">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
