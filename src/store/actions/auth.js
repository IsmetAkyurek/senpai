import { AuthProxy } from 'proxies';

export default {
  signIn: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      dispatch({ type: 'AUTH_REQUEST', payload: { key: 'login' } });
      new AuthProxy().signIn(payload).then(response => {
        dispatch({ type: 'AUTH_SUCCESS', payload: { data: response, key: 'login' } });
        setTimeout(() => {
          dispatch({ type: 'AUTH_RESET', payload: { key: 'login' } });
          resolve();
        }, 2000);
      }).catch(error => {
        dispatch({ type: 'AUTH_ERROR', payload: { key: 'login', error: error.message } });
        setTimeout(() => { dispatch({ type: 'AUTH_RESET', payload: { key: 'login' } }); }, 2000);
        reject();
      });
    });
  },
  getAccount: () => {
    return dispatch => new Promise((resolve, reject) => {
      dispatch({ type: 'AUTH_REQUEST', payload: { key: 'user' } });
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.pathname = '/auth/sign-in';
      }
      else {
        new AuthProxy().getAccount(token).then(response => {
          dispatch({ type: 'AUTH_SUCCESS', payload: { key: 'user', data: response.data } });
          resolve(response);
        }).catch(error => {
          localStorage.removeItem('token');
          reject();
        });
      }
    });
  }
};