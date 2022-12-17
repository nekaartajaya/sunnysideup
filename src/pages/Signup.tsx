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
import {Icon} from '@rneui/themed';
import {Formik} from 'formik';
import {FormSignup} from 'interfaces/form';
import * as yup from 'yup';
import FormError from 'components/FormError';
import {signUpAPI} from 'api/AuthAPI';

const Signup = ({navigation}: PropsNavigation) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const signupValidationSchema = yup.object().shape({
    username: yup
      .string()
      .min(6, ({min}) => `Username must be at least ${min} characters`)
      .required('Username is Required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const onSignup = async (values: FormSignup) => {
    setError('');
    setSuccess('');
    setLoading(true);

    const resp = await signUpAPI(values);
    if (resp?.status === 200) {
      setSuccess('Sign Up Success');
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Login');
      }, 2000);
    } else {
      setError(resp?.data);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Text className="mb-8">SIGN UP FORM</Text>
      {error && (
        <View className="w-4/5 mb-5 bg-red-100 py-1 px-2 rounded-[4px]">
          <Text className="text-[10px] text-red-600">{error}</Text>
        </View>
      )}
      {success && (
        <View className="w-4/5 mb-5 bg-green-100 py-1 px-2 rounded-[4px]">
          <Text className="text-[10px] text-green-600">{success}</Text>
        </View>
      )}
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values: FormSignup) => onSignup(values)}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          touched,
          values,
          errors,
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
                  Email
                </Text>
                <TextInput
                  editable={!loading}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
              </View>
              {errors.email && touched.email && (
                <FormError text={errors.email} />
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
            <View className="w-4/5 self-center mb-4">
              <View className="border px-2 py-3 rounded-[4px] relative">
                <Text className="absolute top-[-10px] left-1 bg-white px-1">
                  Confirm Password
                </Text>
                <TextInput
                  editable={!loading}
                  className="pr-10"
                  onBlur={handleBlur('confirmPassword')}
                  onChangeText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  onPress={handleShowConfirmPassword}
                  className="absolute right-2 bottom-2">
                  {showConfirmPassword ? (
                    <Icon name="eye-with-line" type="entypo" color="#517fa4" />
                  ) : (
                    <Icon name="eye" type="entypo" color="#517fa4" />
                  )}
                </TouchableOpacity>
              </View>
              {errors.confirmPassword && touched.confirmPassword && (
                <FormError text={errors.confirmPassword} />
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
                <Text className="mx-auto text-white font-bold">Sign Up</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <View className="flex-row">
        <Text>Already have account ? </Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('Login')}
            className="text-[#106EEA] underline">
            Login now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
