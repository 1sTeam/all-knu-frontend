import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Home';
import Notice from '../components/Notice';

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
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
