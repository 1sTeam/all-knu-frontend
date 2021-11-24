import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Notice from "../components/Notice";
import Depart from "../components/Depart";
import Setting from "../components/Setting";
import Login from "../components/Login";
import NaverMap from "../components/NaverMap";
import GradeInquiry from "../components/GradeInquiry";
import Schedule from "../components/Schedule";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", // 메인홈이 꾸며지는 동안 공지로
    name: "Notice",
    component: Notice,
  },

  {
    path: "/notice/univ",
    name: "Notice",
    component: Notice,
  },
  {
    path: "/notice/univ/:type",
    name: "Notice",
    component: Notice,
  },

  {
    path: "/notice/major",
    name: "Depart",
    component: Depart,
  },
  {
    //지금은 임시로 경로에 타입을 넣지만 원래는 설정에서 지정해줘야 함
    path: "/notice/major/:type",
    name: "Depart",
    component: Depart,
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/map",
    name: "Map",
    component: NaverMap,
  },
  {
    path: "/grade",
    name: "Grade",
    component: GradeInquiry,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
