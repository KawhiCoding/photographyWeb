import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/HomePage', component: () => import('pages/HomePage.vue') },
      { path: '/GalleriesPage', component: () => import('pages/GalleriesPage.vue')},
      { path: '/AboutPage', component: () => import('pages/AboutPage.vue')},
      { path: '/ConnectPage', component: () => import('pages/ConnectPage.vue')}
    
    ],
    
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
