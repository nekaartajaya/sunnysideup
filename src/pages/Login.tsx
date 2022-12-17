import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {PropsNavigation} from 'interfaces/navigation';
import {StackActions} from '@react-navigation/routers';
import {Icon} from '@rneui/themed';

const Login = ({navigation}: PropsNavigation) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeUsername = (value: string) => {
    setUsername(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="mb-8">WELCOME</Text>
      <View className="w-full mb-5">
        <View className="w-4/5 self-center mb-4 border p-2 rounded-[4px] relative">
          <TextInput
            editable={!loading}
            className=""
            onChangeText={onChangeUsername}
            value={username}
          />
        </View>
        <View className="w-4/5 self-center mb-4 border p-2 rounded-[4px] relative">
          <TextInput
            editable={!loading}
            className="pr-10"
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={handleShowPassword}
            className="absolute right-2 top-1">
            {showPassword ? (
              <Icon name="eye-with-line" type="entypo" color="#517fa4" />
            ) : (
              <Icon name="eye" type="entypo" color="#517fa4" />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          disabled={loading}
          onPress={onLogin}
          className={`bg-[#106EEA] rounded-[4px] py-2 px-5 w-[150px] self-center ${
            loading ? 'opacity-50' : 'opacity-100'
          }`}>
          {loading ? (
            <View className="flex-row items-center space-x-2">
              <ActivityIndicator color="#FFF" />
              <Text className="text-white">Loading ...</Text>
            </View>
          ) : (
            <Text className="mx-auto text-white font-bold">Log In</Text>
          )}
        </TouchableOpacity>
      </View>

      <View className="flex-row">
        <Text>Dont have account ? </Text>
        <TouchableOpacity>
          <Text className="text-[#106EEA] underline">Signup now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
