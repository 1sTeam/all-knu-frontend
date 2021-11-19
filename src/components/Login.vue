<template>
  <div>
    <main-template>
      <template slot="header"></template>
      <div class="login-wrapper">
        <div class="login-box">
          <div class="login-box-inner">
            <div class="login-box-header">
              <div class="login-logo">
                <a href="/">
                  <img src="@/assets/img/ramb_13.png" />
                </a>
              </div>
              <div class="login-title">지금 시작하세요 !</div>
            </div>
            <div class="login-box-body">
              <div>
                <div class="anim-input-box">
                  <input type="text" v-model="id" required />
                  <label>학번</label>
                </div>
                <div class="anim-input-box">
                  <input
                    v-on:keyup.enter="onSubmitForm"
                    type="password"
                    v-model="pwd"
                    required
                  />
                  <label>비밀번호</label>
                </div>
                <button v-on:click="onSubmitForm" class="login-button">
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <template slot="tab-bar"> </template>
    </main-template>
  </div>
</template>

<script>
import axios from "axios";
//기본 양식
import MainTemplate from "./MainTemplate.vue";

export default {
  components: { MainTemplate },
  name: "Login",
  data() {
    return {
      id: "",
      pwd: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      axios
        .post(
          "https://all-knu-backend.accongbox.com/knu/login",
          {
            id: this.id,
            password: this.pwd,
          }
        )
        .then((response) => {
          // 로그인 성공일 때

          // 로그인 쿠키 정보를 로컬 스토리지에 저장한다.
          console.log(response.data);
          console.log(response.status);
          console.log(response.headers);
          const userCookies = response.data.list.mobileCookies;
          const ssoCookies = response.data.list.ssoCookies;
          const studentInfo = response.data.list.studentInfo;
          const userInfo = {
            userCookies: userCookies,
            ssoCookies: ssoCookies,
            studentInfo: studentInfo
          };
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          // 홈으로 라우팅
          this.$router.push("/");
        })
        .catch((error) => {
          // 로그인 실패
          if (error.response) {
            // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if (error.response.status === 400) {
              alert("아이디 비밀번호를 입력해주세요");
            } else if (error.response.status === 404) {
              alert("로그인 실패했습니다.");
            }
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
    },
  },
};
//450px
</script>

<style scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #576bca;
}

.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.login-box-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
  margin-bottom: 10px;
}

.login-logo img {
  height: 100px;
}
.login-title {
  color: white;
  font-size: 25px;
  padding: 0px 15px 15px 0px;
}
.login-box-body {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 300px;
  border-radius: 5px;
  align-items: center;
  padding: 0 20px 0 20px;
}
.login-box-body > div {
  position: relative;
  width: 100%;
  height: 100%;
}

.anim-input-box {
  position: relative;
  margin-top: 30px;
  width: 100%;
}
.anim-input-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  background: transparent;
}
.anim-input-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  pointer-events: none;
  transition: 0.2s;
}
.anim-input-box input:focus ~ label,
input:valid ~ label {
  top: -20px;
  left: 0;
  color: navy;
  font-size: 12px;
  font-weight: 700;
}

.login-button {
  background-color: #354076;
  color: white;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
  padding: 10px 0 10px 0;

  position: absolute;
  bottom: 10px;
  width: 100%;
}

@media only screen and (max-width: 1024px) {
  /* 테블릿 M일 때*/
  .login-title {
    font-size: 20px;
  }
  .ID-box {
    font-size: 16px;
  }
  .pwd-box {
    font-size: 16px;
  }
  .login-button {
    font-size: 16px;
  }
  .login-box {
    justify-content: flex-start;
    
  }
  
}
@media only screen and (max-width: 768px) {
  /* 테블릿S일 때 */
  .login-title {
    font-size: 20px;
  }
  .ID-box {
    font-size: 16px;
  }
  .pwd-box {
    font-size: 16px;
  }
  .login-button {
    font-size: 16px;
  }
  .login-box {
    justify-content: flex-start;
  }
}
@media only screen and (max-width: 479px) {
  /* 모바일 일 때 */
  .login-title {
    font-size: 18px;
  }
  .ID-box {
    font-size: 16px;
  }
  .pwd-box {
    font-size: 16px;
  }
  .login-button {
    font-size: 16px;
  }
  .login-box {
    justify-content: flex-start;
  }
  .login-box-body{
      width:310px;
      padding: 0 10px 0 10px;
  }
  .login-logo img{
      height: 80px;
  }
  
  
  
}
</style>
