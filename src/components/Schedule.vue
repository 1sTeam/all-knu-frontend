<template>
  <div>
    <main-template>
      <template slot="header"></template>
      <main-container>
        <div class="Schedule-header">
          <div class="Schedule-title">
            <span>&nbsp;&nbsp;시간표 조회</span>
          </div>
          <time-table></time-table>
        </div>
      </main-container>
      <template slot="tab-bar"> </template>
    </main-template>
  </div>
</template>

<script>
import MainTemplate from "./MainTemplate.vue";
import MainContainer from "./MainContainer.vue";
import TimeTable from "./TimeTable.vue";

export default {
  components: { MainTemplate, MainContainer, TimeTable },
  data() {
    return {};
  },
};
</script>
