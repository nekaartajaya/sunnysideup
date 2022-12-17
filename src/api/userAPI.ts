import axiosInstance from './axiosInstance';

export const getUserAPI = async () => {
  return await axiosInstance
    .get('auth/users/1')
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
