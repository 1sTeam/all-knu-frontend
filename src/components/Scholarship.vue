<template>
  <div>
    <main-template>
      <template slot="header"> </template>
      <main-container>
        <div class="scholarship-wrapper">
          <div class="scholarship-header">
            <div class="scholarship-title">
              <span>&nbsp;&nbsp;장학금 내역 조회</span>
            </div>
          </div>
          <div class="scholarship-body">
            <div class="scholarship-detail-wrap">
              <span class="scholarship-index">상세내역</span>
              <div v-for="(i, index) in this.scholarship" :key="index">
                <table>
                  <tbody>
                    <tr>
                      <th>장학 구분</th>
                      <td>{{ i.describe }}</td>
                    </tr>
                    <tr>
                      <th>년도 - 학기 / 학년</th>
                      <td>{{ i.year }} - {{ i.semester }} / {{ i.grade }}</td>
                    </tr>
                    <tr>
                      <th>장학금액</th>
                      <td>{{ i.amount }}원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main-container>
      <template slot="tab-bar"> </template>
    </main-template>
  </div>
</template>

<script>
import MainTemplate from "./MainTemplate.vue";
import MainContainer from "./MainContainer.vue";
import axios from "axios";

export default {
  components: { MainTemplate, MainContainer },
  data() {
    return {
      userState: null, //일단은 1로 둠, null로 표시해야함
      scholarship: [
        {
          amount: "900000",
          department: "소프트웨어응용학부",
          year: "2021",
          grade: "3",
          semester: "2",
          describe: "학술제",
        },
        {
          amount: "300000",
          department: "교수학습지원센터",
          year: "2021",
          grade: "3",
          semester: "1",
          describe: "학습공동체 장학금",
        },
        {
          amount: "900000",
          department: "소프트웨어응용학부",
          year: "2021",
          grade: "3",
          semester: "2",
          describe: "창업서바이벌",
        },
      ], //null로 표시하기
    };
  },
  mounted() {
    const user = JSON.parse(window.localStorage.getItem("userInfo"));
    this.userState = user;
    if (user == null) {
      alert("로그인을 해야합니다");
      this.$router.push("/");
    } else if (user != null) {
      axios
        .post(
          "https://all-knu-backend.accongbox.com/knu/scholarship",
          this.userState.userCookies
        )
        .then((response) => {
          console.log(response.data);
          this.scholarship = response.data.list;
        })
        .catch((error) => {
          if (error.response.status === 403) {
            //쿠키 정보가 부정확함, api 호출 실패 리다이렉트
            alert("로그인 다시 해주세요");
            localStorage.removeItem("userInfo");
            this.$router.push("/");
          }
        });
    }
  },
  methods: {},
};
</script>
<style>
.scholarship-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.scholarship-header {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  justify-content: center;
}
.scholarship-title {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
}
.scholarship-body {
  padding-left: 20px;
  display: grid;
  grid-template-rows: 230px 450px;
}
.scholarship-detail-wrap {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.scholarship-index {
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 20px;
}
table {
  width: 96%;
  border: 1px solid #bbbbbb;
  border-collapse: collapse;
  text-align: center;
  display: block;
  margin-bottom: 15px;
}
table td {
  width: 70%;
}
table th {
  width: 300px !important;
}
table td,
th {
  padding: 10px;
  font-size: 13px;
}
table th {
  background: #e5e5e5;
}

@media only screen and (max-width: 1024px) {
  .scholarship-body {
    grid-template-rows: 190px 450px;
  }

  table trtd,
  th {
    padding: 6px;
    font-size: 12px;
  }
  /* 테블릿 M일 때*/
}
@media only screen and (max-width: 768px) {
  /* 테블릿S일 때 */
}
@media only screen and (max-width: 479px) {
  .scholarship-body {
    grid-template-rows: 170px 400px;
  }
  /* 모바일 일 때 */
  .scholarship-title {
    font-size: 17px;
  }
  .scholarship-index {
    font-size: 16px;
    font-weight: 700;
  }
  table td,
  th {
    padding: 5px;
    font-size: 10px;
  }
}
</style>
