<template>
  <div>
    <main-template>
      <template slot="header"></template>
      <main-container>
        <div class="Schedule-header">
          <div class="Schedule-title">
            <span>&nbsp;&nbsp;시간표 조회</span>
          </div>
          <Timetable></Timetable>
        </div>
      </main-container>
      <template slot="tab-bar"> </template>
    </main-template>
  </div>
</template>

<script>
import MainTemplate from "./MainTemplate.vue";
import MainContainer from "./MainContainer.vue";
import Timetable from "./Timetable.vue";

export default {
  components: { MainTemplate, MainContainer, Timetable },
  data() {
    return {};
  },
};
</script>
