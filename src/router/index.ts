import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: import('../pages/index.vue') },
  { path: '/chat', name: 'Chat', component: import('../pages/chat/index.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
