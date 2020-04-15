const routes = [{
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/whycompass',
        component: () => import('pages/WhyCompass.vue')
      },
      {
        path: '/news',
        component: () => import('pages/News.vue')
      },
      {
        path: '/openhouses/:neighborhood?',
        component: () => import('pages/Openhouses.vue'),
        props: true
      }, 
      {
        path: '/search',
        component: () => import('components/CompassSearch.vue')
      }, 
      {
        path: '/Buyers',
        component: () => import('pages/Buyers.vue')
      }, 
      {
        path: '/Sellers',
        component: () => import('pages/Sellers.vue')
      }, {

        path: '/meetme',
        component: () => import('pages/Calendly.vue')
      }, 
      {
        path: '/privateexclusives',
        component: () => import('pages/PrivateExclusives.vue')
      }
    ]
  },
  // {
  //   path: '/dev',
  //   component: () => import('layouts/dev.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index-dev.vue') },
  //     { path: '/search', component: () => import('components/CompassSearch.vue') }
  //   ]
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
