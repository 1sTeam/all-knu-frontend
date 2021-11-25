<template>
  <div>
    <main-template>
      <template slot="header"> </template>
      <main-container>
        <div class="scholarship-wrapper">
          <div class="scholarship-header">
            <div class="scholarship-title">
              <span>&nbsp;&nbsp;장학금 내역 조회</span>
              <div class="period-select-wrap">
                <select
                  name="period"
                  v-model="periodSelected"
                  @change="changePeriod()"
                >
                  <option disabled value="">년도, 학기를 선택해주세요</option>
                  <option v-for="(i, index) in period" :key="index" :value="i">
                    {{ i.schl_year }}년도 - {{ i.schl_smst }}학기
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="scholarship-body">
            <div class="scholarship-detail-wrap">
              <span class="scholarship-index">상세내역</span>
              <table>
                <tr>
                  <th width="40%">장학 구분 / 학과</th>
                  <td></td>
                </tr>
                <tr>
                  <th>평균 학점</th>
                  <td></td>
                </tr>
                <tr>
                  <th>장학금액</th>
                  <td></td>
                </tr>
              </table>
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
      periodSelected: "",
      detailIndex: ["구분", "과목명", "학점", "성적"],
      totalDetail: {
        total: {},
        detail: [],
      },
      period: {
        id: "36a63eb2-1c7f-4820-9e56-412870c3566e",
        dateTime: "2021-10-09T16:03:58.630+00:00",
        status: 200,
        message: "재학기간 조회 성공",
        list: [
          { schl_year: "2021", schl_smst: "1" },
          { schl_year: "2018", schl_smst: "2" },
          { schl_year: "2018", schl_smst: "1" },
          { schl_year: "2017", schl_smst: "2" },
          { schl_year: "2017", schl_smst: "1" },
        ],
      },
    };
  },

  methods: {
    changePeriod() {
      const user = JSON.parse(window.localStorage.getItem("userInfo"));
      this.userState = user;
      if (this.periodSelected != null) {
        // 꺼내온 토큰과 구독리스트 변수를 이용해 api의 post body를 구성한다.
        const body = {
          cookies: this.userState.userCookies, //쿠키정보
          year: this.periodSelected.schl_year,
          semester: this.periodSelected.schl_smst,
        };
        axios
          .post("https://all-knu-backend.accongbox.com/knu/", body)
          .then((response) => {})
          .catch((error) => {
            if (error.response.status === 403) {
              //쿠키 정보가 부정확함, api 호출 실패 리다이렉트
              alert("장학금 조회 실패");
              localStorage.removeItem("userInfo");
              this.$router.push("/");
            }
          });
      }
      this.userState = null;
    },
  },
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
.period-select-wrap {
  display: flex;
  margin-left: auto;
  margin-right: 4%;
  width: 250px;
  background: url(../assets/arrow_down_18dp.png) no-repeat 100% 60%;
  border: 1px solid #bbbbbb;
}
select {
  display: flex;
  padding: 5px 63px 5px 10px;
  font-size: 15px;
  box-sizing: border-box;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}
select::-ms-expand {
  display: none; /* 화살표 없애기 for IE10, 11*/
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
  font-size: 15px;
  font-weight: 700;
  padding-bottom: 20px;
}
table {
  width: 96%;
  border: 1px solid #bbbbbb;
  border-collapse: collapse;
  text-align: center;
}
table td,
th {
  padding: 10px;
  border: 1px solid #bbbbbb;
}
table th {
  background: #e5e5e5;
}

@media only screen and (max-width: 1024px) {
  .scholarship-body {
    grid-template-rows: 190px 450px;
  }
  table td,
  th {
    padding: 6px;
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
    font-size: 12px;
    font-weight: 700;
  }
  select {
    font-size: 12px;
    padding: 5px 47px 5px 10px;
  }
  .period-select-wrap {
    width: 200px;
  }
  table td,
  th {
    padding: 5px;
  }
}
</style>
