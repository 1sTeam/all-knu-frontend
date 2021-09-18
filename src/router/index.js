import Vue from "vue";
import VueRouter from "vue-router";
import MainTemplate from "../components/MainTemplate.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainTemplate",
    component: MainTemplate,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
