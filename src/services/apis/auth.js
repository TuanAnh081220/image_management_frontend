import Cookies from 'js-cookie';
import { cookieConstants } from './../../consts';
import Client from './request';
// import { createBrowserHistory } from 'history';

// const browserHistory = createBrowserHistory();

const authURL = 'auths'

const isLoggedIn = () => {
  const accessToken = getAccessToken();
  return accessToken ? true : false;
};

const login = (email, password) => {
  return Client.post(
    authURL + '/login', {
        email: email,
        password: password
      }
  );
};

const logout = () => {
  Cookies.remove(cookieConstants.ACCESS_TOKEN);
};

const setAccessToken = (response) => {
  const accessToken = response.access_token
  const expires = response.access_expires / 86400
  Cookies.set(cookieConstants.ACCESS_TOKEN, accessToken, {
    expires: expires
  });
};

const getAccessToken = () => {
  console.log(Cookies.get(cookieConstants.ACCESS_TOKEN))
  return Cookies.get(cookieConstants.ACCESS_TOKEN);
};

// const denyAccess = () => {
//   browserHistory.push('/403');
// };

export default {
  isLoggedIn,
  login,
  logout,
  getAccessToken,
  // denyAccess,
  setAccessToken,
};
