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
import {FormLogin} from 'interfaces/form';
import * as yup from 'yup';
import FormError from 'components/FormError';
import {Formik} from 'formik';
import {loginAPI} from 'api/authAPI';
import {useDispatch} from 'react-redux';
import {SET_ACCESS_TOKEN, SET_USER} from 'redux/actions/types/auth';

const Login = ({navigation}: PropsNavigation) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginValidationSchema = yup.object().shape({
    username: yup.string().required('Username is Required'),
    password: yup.string().required('Password is required'),
  });

  const onLogin = async (values: FormLogin) => {
    console.log(values);
    setError('');
    setLoading(true);

    const resp = await loginAPI(values);
    if (resp?.status === 200) {
      dispatch({type: SET_ACCESS_TOKEN, payload: resp?.data?.token});
      dispatch({
        type: SET_USER,
        payload: {
          username: resp?.data?.username,
          image: resp?.data?.image,
        },
      });
      setTimeout(() => {
        setLoading(false);
        navigation.dispatch(StackActions.replace('Home'));
      }, 2000);
    } else {
      setError(resp?.data);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Text className="mb-8">WELCOME</Text>
      {error && (
        <View className="w-4/5 mb-5 bg-red-100 py-1 px-2 rounded-[4px]">
          <Text className="text-[10px] text-red-600">{error}</Text>
        </View>
      )}
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values: FormLogin) => onLogin(values)}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <View className="w-full mb-5">
            <View className="w-4/5 self-center mb-4">
              <View className="border px-2 py-3 rounded-[4px] relative">
                <Text className="absolute top-[-10px] left-1 bg-white px-1">
                  Username
                </Text>
                <TextInput
                  editable={!loading}
                  onBlur={handleBlur('username')}
                  onChangeText={handleChange('username')}
                  value={values.username}
                />
              </View>
              {errors.username && touched.username && (
                <FormError text={errors.username} />
              )}
            </View>

            <View className="w-4/5 self-center mb-4">
              <View className="border px-2 py-3 rounded-[4px] relative">
                <Text className="absolute top-[-10px] left-1 bg-white px-1">
                  Password
                </Text>
                <TextInput
                  editable={!loading}
                  className="pr-10"
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={handleShowPassword}
                  className="absolute right-2 bottom-2">
                  {showPassword ? (
                    <Icon name="eye-with-line" type="entypo" color="#517fa4" />
                  ) : (
                    <Icon name="eye" type="entypo" color="#517fa4" />
                  )}
                </TouchableOpacity>
              </View>
              {errors.password && touched.password && (
                <FormError text={errors.password} />
              )}
            </View>
            <TouchableOpacity
              disabled={loading || !isValid}
              onPress={() => handleSubmit()}
              className={`bg-[#106EEA] rounded-[4px] py-2 px-5 w-[150px] self-center ${
                loading || !isValid ? 'opacity-50' : 'opacity-100'
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
        )}
      </Formik>

      <View className="flex-row">
        <Text>Dont have account ? </Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('Signup')}
            className="text-[#106EEA] underline">
            Signup now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
