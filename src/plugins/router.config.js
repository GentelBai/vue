import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
// import User from '@/components/User'
// import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Gallery from '@/components/Gallery'
// import AppError from '@/common/AppError'

let routes=[
  {path:'/home',component:Home},
  {path:'/about',component:About},
  {path:'/contact',component:Contact},
  {path:'/gallery/',component:Gallery},
  // {path:'/user',component:User},
  // {path:'/login',component:Login},
  // {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  // {path:'*',component:AppError}
];

const router = new VueRouter({routes,mode:'history'});

export default router;