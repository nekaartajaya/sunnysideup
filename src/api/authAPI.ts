import {FormLogin, FormSignup} from 'interfaces/form';
import axiosAuthInstance from './axiosAuthInstance';

export const loginAPI = async (params: FormLogin) => {
  return await axiosAuthInstance
    .post('auth/login', params)
    .then(response => {
      return {
        data: response?.data,
        status: response?.status,
      };
    })
    .catch(error => {
      return {
        data: error?.response?.data?.message,
        status: error?.response?.status,
      };
    });
};

export const signUpAPI = async (params: FormSignup) => {
  return await axiosAuthInstance
    .post('users/add', params)
    .then(response => {
      return {
        data: response?.data,
        status: response?.status,
      };
    })
    .catch(error => {
      return {
        data: error?.response?.data?.message,
        status: error?.response?.status,
      };
    });
};
