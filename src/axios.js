import axios from 'axios';
import constant from './Utilities/Constant'

const instance = axios.create({
    baseURL: constant.api
});

export default instance;