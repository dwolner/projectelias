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
        path: '/buyerspresentation',
        component: () => import('pages/BuyersPresentation.vue')
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
      // {
      //   path: '/search',
      //   component: () => import('components/CompassSearch.vue')
      // }, 
      {
        path: '/idx',
        component: () => import('components/IDX.vue')
      }, 
      {
        path: '/buyers',
        component: () => import('pages/Buyers.vue')
      }, 
      {
        path: '/sellers',
        component: () => import('pages/Sellers.vue')
      }, 
      {
        path: '/letstalk',
        component: () => import('pages/Calendly.vue')
      }, 
      {
        path: '/privateexclusives',
        component: () => import('pages/PrivateExclusives.vue')
      },
      {
        path: '/videos',
        component: () => import('pages/Videos.vue')
      },
      {
        path: '/howcanwehelp',
        component: () => import('pages/HowCanWeHelp.vue')
      },
      {
        path: '/homedigest',
        component: () => import('pages/Homebot.vue')
      },
      {
        path: '/privacypolicy',
        component: () => import('pages/PrivacyPolicy.vue')
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
