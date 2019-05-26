export default {
  path: '/auth',
  name: 'auth',
  component: require('components/Auth/Layout/Layout').default,
  routes: [
    {
      path: '/sign-in',
      name: 'signIn',
      component: require('components/Auth/Views/SignIn').default,
    },
  ]
};