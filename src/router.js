import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';

import Myprofile from './views/Myprofile.vue';
import Contactinfo from './views/Contactinfo.vue';

const routes = [
  { path: '/Myprofile', name: 'Myprofile', component: Myprofile },
  {
    path: '/Contactinfo',
    name: 'Contactinfo',
    component: Contactinfo,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
