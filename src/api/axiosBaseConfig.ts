import {AxiosError, AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const axiosBaseConfig = {
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosInterceptorRequest = async (
  headerConfig: AxiosRequestConfig<unknown>,
) => {
  const auth = await AsyncStorage.getItem('persist:root');
  const parseAuth = await JSON.parse(auth as string).auth;
  const accessToken = await JSON.parse(parseAuth).accessToken;

  if (accessToken && headerConfig.headers) {
    headerConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return headerConfig;
};

export const axiosInterceptorResponseError = ({error}: {error: AxiosError}) => {
  return Promise.reject(error);
};
