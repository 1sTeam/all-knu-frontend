<template>
  <div class="menu-wrapper">
    <div class="menu-header">
      <div class="menu-button" id="left_btn" @click="toggle">
        <span class="material-icons">menu</span>
      </div>
      <div class="menu-title">
        <span><router-link to="/">ALL-KNU</router-link></span>
      </div>
      <div class="main-menu">
        <div><router-link to="/notice/univ">공지사항</router-link></div>
        <div><router-link to="/notice/major">학과공지</router-link></div>
        <div><router-link to="/map">지도</router-link></div>
        <div><router-link to="/schedule">시간표</router-link></div>
        <div><router-link to="/">더보기</router-link></div>
      </div>
      <div class="main-side-menu">
        <router-link to="to">
          <div class="notice-btn-text"><span>알람</span></div>
          <div class="notice-btn-icon">
            <span class="material-icons">notifications</span>
          </div>
        </router-link>
        <div v-if="isLogin == false">
          <router-link to="/login">
            <div class="login-btn-text"><span>로그인</span></div>
            <div class="login-btn-icon">
              <span class="material-icons">account_circle</span>
            </div>
          </router-link>
        </div>
        <div v-else @click="logout">
          <div class="login-btn-text"><span>로그아웃</span></div>
          <div class="login-btn-icon">
            <span class="material-icons">account_circle</span>
          </div>
        </div>
        <router-link to="/setting">
          <div class="setting-btn-icon">
            <span class="material-icons">settings</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="left-menu">
      <div class="left-inner-profil">
        <div class="close-btn">
          <a @click="toggle" class="material-icons">close</a>
        </div>

        <div class="img-profil">
          <img src="../assets/img/ramb_5.png" />
        </div>

        <div class="student-profil">
          <div class="student-name"><span v-text="myName"></span></div>
          <div class="student-profil-inner">
            <div class="student-id"><span v-text="myId"></span></div>
            /
            <div class="student-Department">
              <span v-text="myMajor"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="left-inner-menu">
        <router-link to="/grade">성적조회</router-link>
        <hr />
        <a>장학금 내역 조회</a>
        <hr />
        <router-link to="/tuition">등록금 납부 조회</router-link>
        <hr />
        <a>열람실 조회</a>
        <hr />
        <router-link to="/telephone">교직원 검색</router-link>
        <hr />
        <a>학사 일정</a>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "menubar",
  data() {
    return {
      toggle: this.enter,
      isLogin: false,
      myMajor: "",
      myName: "",
      myId: "",
    };
  },
  mounted() {
    const user = JSON.parse(window.localStorage.getItem("userInfo")); // userInfo 존재 여부
    if (user != null) {
      this.isLogin = true;
      this.myMajor = user.studentInfo.major;
      this.myId = user.studentInfo.id;
      this.myName = user.studentInfo.name;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    enter: function (el, done) {
      this.toggle = this.leave;
      $(".left-menu").stop().animate({ left: "0px" }, 400);
      $(".left-menu").toggleClass("emphasized");
    },
    leave: function (el, done) {
      this.toggle = this.enter;
      $(".left-menu").stop().animate({ left: "-300px" }, 400);
      $(".left-menu").toggleClass("emphasized");
    },
    logout: function () {
      console.log("logout");

      const user = JSON.parse(window.localStorage.getItem("userInfo"));
      if (user != null) {
        const cookies = user.userCookies;
        axios
          .post("https://all-knu-backend.accongbox.com/knu/logout", cookies)
          .then((response) => {
            alert("로그아웃 하였습니다.");
            localStorage.removeItem("userInfo");
            this.isLogin = false;
          })
          .catch((error) => {
            // 로그인 실패
            if (error.response) {
              // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // 요청이 이루어 졌으나 응답을 받지 못했습니다.
              // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
              // Node.js의 http.ClientRequest 인스턴스입니다.
              console.log(error.request);
              alert("서버 점검 중입니다.");
            } else {
              // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
              console.log("Error", error.message);
              alert("서버 점검 중입니다2.");
            }
          });
        //
      }
    },
  },
};
</script>

<style>
* {
  text-decoration: none;
}
.emphasized {
  position: fixed;
  top: 150px;
  left: 30px;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
  z-index: 100 !important;
}
.menu-wrapper {
  width: 100%;
  position: fixed;
}
.left-menu {
  display: none;
  grid-template-rows: 220px 100%;
  height: 100%;
  width: 300px;
  position: fixed;
  top: 0;
  left: -300px;
  background-color: rgb(211, 211, 211);
  color: rgb(255, 255, 255);
  font-family: "Noto Sans KR", sans-serif;
}
.left-inner-profil {
  display: grid;
  grid-template-rows: 30px 100px 70px;
  background-color: #576bca;
  font-weight: bolder;
  height: 100%;
}
.close-btn a {
  display: flex;
  width: 50px;
  color: white !important;
  cursor: pointer;
  font-size: 30px;
  padding: 10px;
  position: absolute;
  right: 0px;
}
.profil-of-article {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.img-profil {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-profil img {
  width: 100px;
  height: 100px;
  border: 1px solid #fafafa;
  border-radius: 100%;
}
.student-profil {
  display: grid;
  grid-template-rows: 40px 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.student-profil span {
  font-size: 1.4rem;
}
.student-name {
  display: flex;
  justify-content: center;
}

.student-profil-inner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.left-inner-menu {
  background-color: #354076;
  height: 100%;
}
.left-inner-menu a {
  text-decoration: none;
}
.left-inner-menu a {
  color: white !important;
  font-size: 1.4rem;
  display: flex;
  padding: 12px;
  padding-left: 30px;
  padding-top: 15px;
}
.left-inner-menu hr {
  display: flex;
  position: absolute;
  right: 25px;
  width: 250px;
  color: white !important;
}

.menu-header {
  display: flex;
  flex-direction: row;
  height: 65px;
  width: 100%;
  background-color: #576bca;
}
.menu-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  cursor: pointer;
}
.menu-title a {
  text-decoration: none !important;
  color: white !important;
}

.main-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.main-menu a {
  color: white !important;
}
.menu-button {
  display: flex;
  color: white;
  font-size: 30px;
  align-items: center;
  padding: 20px;
  cursor: pointer;
}
.menu-title span {
  font-size: 28px;
  color: white;
}

.main-menu a {
  font-size: 1.4rem;
  text-decoration-line: none;
  color: white;
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
}
.main-menu a:hover {
  font-weight: 600;
}

.main-side-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 40%;
}
.main-side-menu div {
  font-size: 1.4rem;
  text-decoration-line: none !important;
  color: white;
  cursor: pointer;
}

.main-side-menu a:hover {
  font-weight: 600;
}
.main-side-menu span:hover {
  font-weight: 600;
}
.main-side-menu .notice-btn-icon {
  display: none;
}
.main-side-menu .login-btn-icon {
  display: none;
}

.left-menu {
  display: grid;
}
.slide {
  display: none;
}

@media only screen and (max-width: 1024px) {
  /* 테블릿 M일 때*/
  .menu-header {
    height: 60px;
  }
  .menu-title {
    width: 100%;
    padding-left: 14% !important;
    cursor: pointer;
  }
  .main-menu {
    display: none;
  }
  .main-side-menu {
    width: 30%;
  }
  .main-side-menu a {
    text-decoration: none;
    text-decoration-line: none;
  }
  .main-side-menu .notice-btn-text {
    display: none;
  }
  .main-side-menu .login-btn-text {
    display: none;
  }
  .main-side-menu .notice-btn-icon {
    display: flex;
  }
  .main-side-menu .login-btn-icon {
    display: flex;
  }
  .main-side-menu .setting-btn-icon {
    padding-top: 5px;
  }
}
@media only screen and (max-width: 768px) {
  /* 테블릿S일 때 */
  .menu-title {
    padding-left: 0px;
  }

  .menu-title {
    padding-left: 10% !important;
  }
  .main-side-menu {
    width: 40%;
  }
}
@media only screen and (max-width: 479px) {
  /* 모바일 일 때 */
  .main-side-menu span {
    font-size: 2rem;
  }
}
</style>
