<template>
  <transition name="slide">
    <div class="iframe-wrapper" v-if="url">
      <div class="close-btn" @click="closeClick()">
        <span class="material-icons">close</span>
      </div>
      <div>
        <iframe :src="this.url" frameborder="0"> </iframe>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: ["url"],
  data() {
    return {
      url: "",
    };
  },

  components: {},

  methods: {
    closeClick() {
      this.url = "";
      document.documentElement.style.overflow = "auto";
      this.$emit("urlUpadate", this.url);
    },
    noticeClick(link) {
      this.url = link;
      document.documentElement.style.overflow = "hidden";
    },
  },
};
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100vh;
}
.iframe-wrapper {
  width: 1000px;
  position: fixed;
}
.slide {
  transition: all 0.5s;
}
.slide-enter-active {
  transition: all 1s ease;
}
.slide-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,
.slide-leave-active {
  opacity: 0;
  transform: translateY(100%);
}
.close-btn {
  position: fixed;
  width: 1000px;
  font-size: 30px;
  color: black;
  padding: 5px;
  padding-left: 950px;
  background-color: white;
  cursor: pointer;
}
@media only screen and (max-width: 1024px) {
  /* 테블릿 M일 때*/

  .close-btn {
    width: 700px;
    padding-left: 660px;
  }
  .iframe-wrapper {
    width: 700px;
    position: fixed;
  }
}
@media only screen and (max-width: 768px) {
  /* 테블릿S일 때 */

  .close-btn {
    width: 100%;
    padding-left: 90%;
  }
  .iframe-wrapper {
    width: 100%;
    position: fixed;
  }
}
@media only screen and (max-width: 479px) {
  /* 모바일 일 때 */
}
</style>
