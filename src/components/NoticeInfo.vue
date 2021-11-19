<template>
  <div>
    <iframe :src="this.url" frameborder="0"> </iframe>
  </div>
</template>

<script>
export default {
  name: "NoticeInfo",
  props: ["url"],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
iframe {
  width: 100%;
  height: 100vh;
}
</style>
