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
                  :task-detail="timetable"
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
      userState: null,
      total_Grades: 15, //임시로 설정
      timetable: [
        [
          {
            dateStart: "11:50",
            dateEnd: "14:30",
            title: "가상현실응용",
            detail: "가상현실응용",
          },
        ],
        [
          {
            dateStart: "9:00",
            dateEnd: "11:40",
            title: "소프트웨어공학",
          },
        ],
        [],
        [
          {
            dateStart: "09:00",
            dateEnd: "11:40",
            title: "캡스톤디자인2",
          },
        ],
        [
          {
            dateStart: "9:00",
            dateEnd: "10:50",
            title: "자기주도프로젝트2",
          },
        ],
        [],
      ],
      timetable_test: {
        list: {
          data: [
            {
              time_day1: "객체지향프로그래밍 후B103",
              time_code: "1a",
              time_day3: "현대암호학 이103",
              time_day2: "데이터베이스 이311",
              real_time: "09:00-09:25",
              time_day5: "자기주도프로젝트II 후B102",
              time_day4: null,
            },
            {
              time_day1: "객체지향프로그래밍 후B103",
              time_code: "1b",
              time_day3: "현대암호학 이103",
              time_day2: "데이터베이스 이311",
              real_time: "09:25-09:50",
              time_day5: "자기주도프로젝트II 후B102",
              time_day4: null,
            },
            {
              time_day1: "객체지향프로그래밍 후B103",
              time_code: "2a",
              time_day3: "현대암호학 이103",
              time_day2: "데이터베이스 이311",
              real_time: "09:50-10:15",
              time_day5: "자기주도프로젝트II 후B102",
              time_day4: null,
            },
            {
              time_day1: "객체지향프로그래밍 후B103",
              time_code: "2b",
              time_day3: "현대암호학 이103",
              time_day2: "데이터베이스 이311",
              real_time: "10:25-10:50",
              time_day5: "자기주도프로젝트II 후B102",
              time_day4: null,
            },
            {
              time_day1: "객체지향프로그래밍 후B103",
              time_code: "3a",
              time_day3: "현대암호학 이103",
              time_day2: "데이터베이스 이311",
              real_time: "10:50-11:15",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: "객체지향프로그래밍 후B103",
              time_code: "3b",
              time_day3: "현대암호학 이103",
              time_day2: "데이터베이스 이311",
              real_time: "11:15-11:40",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: "가상현실응용 이109",
              time_code: "4a",
              time_day3: null,
              time_day2: "데이터베이스 이311",
              real_time: "11:50-12:15",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: "가상현실응용 이109",
              time_code: "4b",
              time_day3: null,
              time_day2: "데이터베이스 이311",
              real_time: "12:15-12:40",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: "가상현실응용 이109",
              time_code: "5a",
              time_day3: null,
              time_day2: null,
              real_time: "12:40-13:05",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: "가상현실응용 이109",
              time_code: "5b",
              time_day3: null,
              time_day2: null,
              real_time: "13:15-13:40",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: "가상현실응용 이109",
              time_code: "6a",
              time_day3: "운영체제 후B102",
              time_day2: null,
              real_time: "13:40-14:05",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: "가상현실응용 이109",
              time_code: "6b",
              time_day3: "운영체제 후B102",
              time_day2: null,
              real_time: "14:05-14:30",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: null,
              time_code: "7a",
              time_day3: "운영체제 후B102",
              time_day2: null,
              real_time: "14:40-15:05",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: null,
              time_code: "7b",
              time_day3: "운영체제 후B102",
              time_day2: null,
              real_time: "15:05-15:30",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: null,
              time_code: "8a",
              time_day3: "운영체제 후B102",
              time_day2: null,
              real_time: "15:30-15:55",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: null,
              time_code: "8b",
              time_day3: "운영체제 후B102",
              time_day2: null,
              real_time: "16:05-16:30",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: null,
              time_code: "9a",
              time_day3: "운영체제 후B102",
              time_day2: null,
              real_time: "16:30-16:55",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: null,
              time_code: "9b",
              time_day3: "운영체제 후B102",
              time_day2: null,
              real_time: "16:55-17:20",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: null,
              time_code: "13",
              time_day3: "데이터분석의기초 샬601",
              time_day2: null,
              real_time: "20:10-21:00",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: null,
              time_code: "14",
              time_day3: "데이터분석의기초 샬601",
              time_day2: null,
              real_time: "21:00-21:50",
              time_day5: null,
              time_day4: null,
            },
            {
              time_day1: null,
              time_code: "15",
              time_day3: "데이터분석의기초 샬601",
              time_day2: null,
              real_time: "21:50-22:40",
              time_day5: null,
              time_day4: null,
            },
          ],
        },
      },
    };
  },
  mounted() {
    if ((time_code = "1a")) {
      return { startTime: "9:00" };
    }
  },
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
