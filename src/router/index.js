import Vue from 'vue';
import Router from 'vue-router';
import About from '../components/About';
import Home from '../components/Home';
import News from '../components/News';
import Blog from '../components/Blog';
import Studio from '../components/Studio';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/studio',
      name: 'Studio',
      component: Studio,
    },
  ],
});
