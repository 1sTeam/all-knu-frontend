import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Home';
import Notice from '../components/Notice';
import test from '../components/test';

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
    path:"/test",
    name: "test",
    component: test,
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
