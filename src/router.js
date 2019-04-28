import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './pages/Top.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default new VueRouter({routes});