<template>
  <div>
    <main-template>
      <template slot="header"> </template>
      <main-container>
        <div class="Schedule-wrapper">
          <div class="Schedule-header">
            <div class="Schedule-title">
              <span>&nbsp;&nbsp;시간표 조회</span>
            </div>
          </div>
          <div class="Schedule-body">
            <div class="Schedule-wrap">
              <span class="Schedule-index">총 {{ total_Grades }} 학점</span>
              <table></table>
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
      total_Grades: 15, //임시로 설정
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style>
.Schedule-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.Schedule-header {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  justify-content: center;
}
.Schedule-title {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
}
.Schedule-body {
  padding-left: 20px;
  display: grid;
  grid-template-rows: 230px 330px;
}
.Schedule-wrap {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.Schedule-index {
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
.total-table {
  height: 500px;
}
@media only screen and (max-width: 600px) {
  /* 테블릿 M일 때*/
}
@media only screen and (max-width: 1024px) {
  /* 테블릿 M일 때*/
}
@media only screen and (max-width: 768px) {
  /* 테블릿S일 때 */
}
@media only screen and (max-width: 479px) {
  /* 모바일 일 때 */
  .Schedule-title {
    font-size: 17px;
  }
  .Schedule-index {
    font-size: 12px;
    font-weight: 700;
  }
}
</style>
