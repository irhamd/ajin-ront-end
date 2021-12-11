import Axios from 'axios'
import { ubahText } from '../Crypto';
import { globalText } from '../Text/GlobalText';
// export const baseURL = process.env.REACT_APP_BASE_URL_229
export const baseURLMaster = process.env.REACT_APP_BASE_URL
export const baseURL = process.env.REACT_APP_BASE_URL
// export const baseURL = process.env.REACT_APP_BASE_URL_JSON_SERVER

const _Api = () => {
  let auth = sessionStorage.getItem(globalText.x_auth_access_token);

  const defaultOptions = {
    baseURL: baseURLMaster,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': auth && `Bearer ${ubahText(auth)}`
      // 'X-TOKEN' :auth,
      // 'X-CSRF-Token' : sessionStorage.getItem('tokencrsf')
    },
  };

  let instance = Axios.create(defaultOptions)
  instance.interceptors.request.use(function (config) {
    // const token =  auth ? auth : 'unAuthorization';
    // const token = 'Authorization';
    // config.headers.Authorization =  token;
    return config;
  });

  return instance;
};
export default _Api();
