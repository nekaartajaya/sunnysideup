import axios from 'axios';
import {axiosBaseConfig} from './axiosBaseConfig';

const axiosAuthInstance = axios.create(axiosBaseConfig);

export default axiosAuthInstance;
