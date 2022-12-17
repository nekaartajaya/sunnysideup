import axiosInstance from './axiosInstance';

export const getAllProductAPI = async () => {
  return await axiosInstance
    .get('auth/products')
    .then(response => {
      return {
        data: response?.data?.products,
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

export const getAllCategoryAPI = async () => {
  return await axiosInstance
    .get('auth/products/categories')
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
