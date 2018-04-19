import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Logout from '@/components/Logout';
import Boards from '@/components/Boards';
import SingleBoard from '@/components/SingleBoard';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/',
      name: 'Boards',
      component: Boards
    },
    {
      path: '/boards/:id',
      name: 'SingleBoard',
      component: SingleBoard
    }
  ],
  mode: 'history'
});
