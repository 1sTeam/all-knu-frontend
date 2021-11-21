<template>
  <div>
    <section class="body-wrapper">
      <article class="body-inner">
        <slot></slot>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  name: "mainContainer",
  data() {
    return {};
  },
};
</script>
<style scoped>
.body-wrapper {
  background-color: white;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.body-inner {
  width: 1000px;
  height: 100%;
  background-color: white;
}
@media only screen and (max-width: 1024px) {
  /* 테블릿 M일 때*/
  .body-inner {
    width: 700px;
  }
}
@media only screen and (max-width: 768px) {
  /* 테블릿S일 때 */
  .body-inner {
    width: 100%;
  }
}
@media only screen and (max-width: 479px) {
  /* 모바일 일 때 */
}
</style>
