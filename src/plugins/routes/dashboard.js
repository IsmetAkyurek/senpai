export default {
  path: '/dashboard',
  name: 'dashboard',
  component: require('components/Dashboard/Layout/Layout').default,
  routes: [
    {
      path: '/home',
      name: 'home',
      icon: 'dashboard',
      component: require('components/Dashboard/Views/Home').default
    },
    {
      path: '/stats',
      name: 'stats',
      icon: 'charts',
      component: require('components/Dashboard/Views/Home').default
    },
    {
      path: '/details',
      name: 'details',
      icon: 'details',
      component: require('components/Dashboard/Views/Home').default
    },
    {
      path: '/profile',
      name: 'profile',
      icon: 'user',
      component: require('components/Dashboard/Views/Home').default
    },
    {
      path: '/games',
      name: 'games',
      icon: 'videos',
      component: require('components/Dashboard/Views/Home').default
    },
  ]
};