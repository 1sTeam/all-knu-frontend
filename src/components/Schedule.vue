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
              <div class="Scheduler">
                <Schedule
                  :time-ground="['09:00', '21:00']"
                  :week-ground="[
                    '월요일',
                    '화요일',
                    '수요일',
                    '목요일',
                    '금요일',
                  ]"
                  :color="['#E5E5E5', '#EAEAEA', '#D6D6D6']"
                  :task-detail="[
                    [
                      {
                        dateStart: '11:50',
                        dateEnd: '14:30',
                        title: '가상현실응용',
                        detail: '가상현실응용',
                      },
                    ],
                    [
                      {
                        dateStart: '9:00',
                        dateEnd: '11:40',
                        title: '소프트웨어공학',
                      },
                    ],
                    [],
                    [
                      {
                        dateStart: '09:00',
                        dateEnd: '11:40',
                        title: '캡스톤디자인2',
                      },
                    ],
                    [
                      {
                        dateStart: '9:00',
                        dateEnd: '10:50',
                        title: '자기주도프로젝트2',
                      },
                    ],
                    [],
                  ]"
                >
                </Schedule>
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
ul {
  list-style: none;
  padding: 0px !important;
  color: black !important;
}
a,
h2,
small,
h3,
p {
  color: black !important;
}
h3 {
  display: flex !important;
  margin: 0px !important;
  width: 100% !important;
  height: 50% !important;
  justify-content: center;
  align-items: center;
}
.Scheduler {
  width: 100%;
  display: flex;
  align-items: center;
}

.Schedule-header {
  padding-left: 10px;
}
.Schedule-title {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
}
.Schedule-body {
  padding-left: 20px;
  width: 140%;
  height: 100%;
}
.Schedule-wrap {
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.Schedule-index {
  font-size: 15px;
  font-weight: 700;
  padding-bottom: 20px;
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
