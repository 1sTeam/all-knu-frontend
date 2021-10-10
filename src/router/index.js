import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Home';
import Notice from '../components/Notice';
import Setting from '../components/Setting';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path:"/notice/univ",
    name: "Notice",
    component: Notice,
  },
  {
    path:"/notice/univ/:type",
    name: "Notice",
    component: Notice,
  },
  {
    path:"/setting",
    name: "Setting",
    component: Setting,
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
