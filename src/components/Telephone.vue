<template>
  <div>
    <main-template>
      <template slot="header"> </template>
      <main-container>
        <div class="telephone-wrapper">
          <div class="telephone-header">
            <div class="telephone-title">
              <span>&nbsp;&nbsp;교내 전화번호 검색</span>
            </div>
            <div class="notice-search">
              <div>
                <div class="search-box">
                  <input placeholder="검색해주세요" />
                  <span class="material-icons">search</span>
                </div>
              </div>
            </div>
          </div>
          <div class="telephone-body">
            <div class="telephone-total-wrap">
              <table>
                <thead>
                  <tr>
                    <th>소속</th>
                    <th>성명</th>
                    <th>전화번호</th>
                    <th>위치</th>
                    <th>이메일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>마음나눔센터</td>
                    <td>김은하(센터장,인220)</td>
                    <td>031-280-3683</td>
                    <td>연구실[김은하]-(인220)</td>
                    <td>eekim@kangnam.ac.kr</td>
                  </tr>
                  <tr>
                    <td>마음나눔센터</td>
                    <td>손성이(팀장)</td>
                    <td>031-899-7200</td>
                    <td>마음나눔센터-(인230)</td>
                    <td>sonsy.choi@kangnam.ac.kr</td>
                  </tr>
                  <tr>
                    <td>마음나눔센터</td>
                    <td>윤정림(상담,검사)</td>
                    <td>031-899-7201</td>
                    <td>마음나눔센터-(인230)</td>
                    <td>limlim.choi@kangnam.ac.kr</td>
                  </tr>
                  <tr>
                    <td>마음나눔센터</td>
                    <td>원가람(상담,검사)</td>
                    <td>031-899-7202</td>
                    <td>마음나눔센터-(인230)</td>
                    <td>riverywon.choi@kangnam.ac.kr</td>
                  </tr>
                </tbody>
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

export default {
  components: { MainTemplate, MainContainer },
  data() {
    return {
      userState: null,
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.telephone-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.telephone-header {
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  justify-content: space-between;
}
.telephone-title {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
}
.telephone-body {
  padding-left: 20px;
  display: grid;
  grid-template-rows: 230px 450px;
}
.telephone-total-wrap {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
table {
  width: 96%;
  border: 1px solid #bbbbbb;
  border-collapse: collapse;
}

table td,
th {
  padding: 10px;
  border: 1px solid #bbbbbb;
  font-size: 14px;
}
table th {
  background: #e5e5e5;
}

.notice-search {
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
}
.notice-search div {
  display: flex;
  align-items: center;
}
.notice-search .search-box {
  border-radius: 5px;
  height: 40px;
  background-color: #f1f1f1;
  padding: 5px;
  width: 310px;
}
.search-box input {
  width: 100%;
  padding: 0 0 0 10px;
  font-size: 1.2rem;
  border-right-width: 1px;
  border-right-style: solid;
  height: 100%;
  margin-right: 5px;
}
@media only screen and (max-width: 1024px) {
  table td,
  th {
    padding: 8px;
  }
  /* 테블릿 M일 때*/
}
@media only screen and (max-width: 768px) {
  /* 테블릿S일 때 */
  table td,
  th {
    padding: 5px;
  }
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
    font-size: 12px;
    border: none;
  }
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  tr {
    border-top: 2px solid #576bca;
    padding-bottom: 15px;
  }
  td {
    border: none;
    position: relative;
    padding-left: 50% !important;
    text-align: left;
  }
  td:before {
    position: absolute;
    left: 0px;
    width: 45%;
    height: 100%;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
  }

  td:nth-of-type(1):before {
    content: "소속";
  }
  td:nth-of-type(2):before {
    content: "성명";
  }
  td:nth-of-type(3):before {
    content: "전화번호";
  }
  td:nth-of-type(4):before {
    content: "위치";
  }
  td:nth-of-type(5):before {
    content: "이메일";
  }
  tbody > tr:last-child {
    padding-bottom: 100px;
  }
}
@media only screen and (max-width: 479px) {
  /* 모바일 일 때 */

  .telephone-title {
    font-size: 17px;
  }
  table td,
  th {
    padding: 5px;
    font-size: 10px;
  }
  td:before {
    font-size: 11px;
  }
  .notice-search .search-box {
    width: 250px;
  }
}
</style>
