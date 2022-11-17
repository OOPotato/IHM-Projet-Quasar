const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/profil', component: () => import('pages/ProfilPage.vue') },
      { path: '/sitting', component: () => import('pages/SittingPage.vue') },
      { path: '/messages', component: () => import('pages/MessagesPage.vue') },
      { path: '/notification', component: () => import('pages/NotificationPage.vue') },
      { path: '/hot', component: () => import('pages/HotPage.vue') },
      { path: '/signets', component: () => import('pages/SignetsPage.vue') },
      { path: '/chat', component: () => import('pages/ChatPage.vue') },
    ]
  },

  {
    path: '/login',
    component: () => import('pages/LoginPage.vue')
  },

  {
    path: '/signup',
    component: () => import('pages/SignupPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
