import axios from 'axios';
import {useSelector} from 'react-redux';
import {AuthState} from 'interfaces/auth';
import axiosBaseConfig from './axiosBaseConfig';

const {accessToken} = useSelector((state: AuthState) => state.auth);

const axiosInstance = axios.create(axiosBaseConfig);

axiosInstance.interceptors.request.use(async (req: any) => {
  if (!accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }

  return req;
});

export default axiosInstance;
