
const env = window.location.hostname === 'localhost' ? 'dev' : 'prod';

const configs = {
  dev: {
    authApiUrl: 'http://5ce643720adb8e0014a6edc4.mockapi.io/api',
    dashboardApiUrl: 'http://5ce62fb20adb8e0014a6ecaa.mockapi.io/api'
  },
  prod: {
    authApiUrl: 'http://5ce643720adb8e0014a6edc4.mockapi.io/api',
    dashboardApiUrl: 'http://5ce62fb20adb8e0014a6ecaa.mockapi.io/api'
  }
};

export default configs[env];