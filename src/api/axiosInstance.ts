import axios from 'axios';
import {
  axiosBaseConfig,
  axiosInterceptorRequest,
  axiosInterceptorResponseError,
} from './axiosBaseConfig';

const axiosInstance = axios.create(axiosBaseConfig);

axiosInstance.interceptors.request.use(axiosInterceptorRequest);

axiosInstance.interceptors.response.use(
  response => response,
  error =>
    axiosInterceptorResponseError({
      error,
    }),
);

export default axiosInstance;
