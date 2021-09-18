import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { getMessaging, onMessage,getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";//불러오기 fcm

Vue.config.productionTip = false;

import Vuetify from 'vuetify' 
import 'vuetify/dist/vuetify.min.css' 
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default new Vuetify({ 
  icons: { 
    iconfont: 'md' // 'md' || 'mdi' || 'fa' || 'fa4' 
    } 
  })

  Vue.use(Vuetify)
  
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


const firebaseConfig = {
  apiKey: "AIzaSyAGAYxqsAXUkX44kjJl2SmayT83t0o2Bd4",
  authDomain: "all-knu.firebaseapp.com",
  projectId: "all-knu",
  storageBucket: "all-knu.appspot.com",
  messagingSenderId: "1039616539246",
  appId: "1:1039616539246:web:a796205e679f0484d9047f",
  measurementId: "G-TEWS8VE3D7"
};
//초기화
const app = initializeApp(firebaseConfig);//연동


// 알림 수신을 위한 사용자 권한 요청
Notification.requestPermission()
  .then((permission) => {
    console.log('permission ', permission)
    if (permission !== 'granted') {
      alert('알림을 허용해주세요')
    }
  });

  const messaging = getMessaging(app);
  //사용자에게 보낼 메세지 정의

  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });
  //forground 푸시 알림 설정 

  getToken(messaging, { vapidKey: 'BNdus5UW6MOOTgjTPnPuuiRpNQDTg39qaf48emlVaMSJlEUiiZW3T2cEEeuhvLnZDKaAYR5I0v3vvK4Ig8v-O0s' }).then((currentToken) => {
    if (currentToken) {
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
  //  사용자의 토큰 값 받아오기 
  
