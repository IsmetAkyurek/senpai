import Proxy from './Proxy';
import config from 'config';

export default class AuthProxy extends Proxy {
  constructor() {
    super(`${config.authApiUrl}`);
  }

  getAccount = () => {
    return this.submit('get', '/account');
  };

  signIn = (payload) => {
    return this.submit('post', '/login', payload);
  };
};