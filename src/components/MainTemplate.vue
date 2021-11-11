<template>
  <v-app>
    <div class="total-wrapper">
      <slot name="header">
        <header class="header-wrapper">
          <menu-bar />
        </header>
      </slot>
      <slot></slot>
      <slot name="tab-bar">
        <div class="bg" v-show="show"></div>
        <div class="tab-bar-see-more" v-show="show">
          <div class="see-more-wrapper">
            <router-link to=""
              ><span class="material-icons">school</span
              ><span class="see-more-inner-txt">이러닝캠퍼스</span></router-link
            >
            <router-link to=""
              ><span class="material-icons">settings</span
              ><span class="see-more-inner-txt">설정</span></router-link
            >
          </div>
        </div>
        <div class="tab-bar">
          <router-link to="/"
            ><span class="material-icons">home</span
            ><span class="tab-bar-inner-txt">홈</span></router-link
          >
          <router-link to="/notice/univ"
            ><span class="material-icons">account_balance</span
            ><span class="tab-bar-inner-txt">공지사항</span></router-link
          >
          <router-link to="/map"
            ><span class="material-icons">map</span
            ><span class="tab-bar-inner-txt">지도</span></router-link
          >
          <router-link to="/schedule"
            ><span class="material-icons">schedule</span
            ><span class="tab-bar-inner-txt">시간표</span></router-link
          >
          <router-link to=""
            ><span class="material-icons" @click="seeMoreBtn()">more_horiz</span
            ><span class="tab-bar-inner-txt">더보기</span></router-link
          >
        </div>
      </slot>
    </div>
  </v-app>
</template>

<script>
import MenuBar from "./MenuBar.vue";
export default {
  name: "mainTemplate",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    seeMoreBtn() {
      this.show = !this.show;
    },
  },
  components: {
    MenuBar,
  },
};
</script>

<style scope>
.total-wrapper {
  display: grid;
  grid-template-rows: 65px 1fr;
  height: 100%;
}
.header-wrapper {
  background-color: red;
  width: 100%;
  z-index: 1;
}

.footer-wrapper {
  background-color: brown;
}

.tab-bar {
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: white;
  box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.3);
  z-index: 2;
}
.tab-bar a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
}
.tab-bar span {
  font-size: 3.5rem;
  opacity: 0.3;
  color: black;
}
.tab-bar .tab-bar-inner-txt {
  font-size: 1.2rem;
}

·tab-bar-see-more {
  display: none;
}

@media only screen and (max-width: 1024px) {
  /* 테블릿 M일 때*/
  .total-wrapper {
    grid-template-rows: 60px 1fr;
  }
  .footer-wrapper {
    display: none;
  }
  .tab-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .tab-bar-see-more {
    position: fixed;
    height: 300px;
    width: 100%;
    bottom: 0;
    background-color: white;
    z-index: 1;
    border-radius: 5px;
  }
  .see-more-wrapper {
    display: flex;
    margin: 40px;
  }
  .see-more-wrapper a {
    display: flex;
    flex-direction: column;
    color: black !important;
    text-decoration: none;
    align-items: center;
    padding-right: 70px;
  }
  .see-more-wrapper span {
    font-size: 3rem;
    padding-bottom: 5px;
  }
  .see-more-wrapper .see-more-inner-txt {
    font-size: 1.4rem;
    padding-top: 5px;
  }

  .bg {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 550px;
    position: absolute;
    top: 60px;
  }
}
@media only screen and (max-width: 768px) {
  /* 테블릿S일 때 */
  .see-more-wrapper .see-more-inner-txt {
    font-size: 1.2rem;
  }
  .see-more-wrapper {
    margin: 30px;
  }
  .see-more-wrapper a {
    padding-right: 50px;
  }
}
@media only screen and (max-width: 479px) {
  /* 모바일 일 때 */
  .see-more-wrapper .see-more-inner-txt {
    font-size: 0.8rem;
  }
}
</style>

<!--
const sizes:{[key:string]: number} = {
	mobile: 479,
	tabletS: 480,
	tabletM: 768,
	desktop: 1024
}

-->
