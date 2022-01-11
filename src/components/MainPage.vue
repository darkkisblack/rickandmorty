<template>
  <div class="mainPage">
    <!-- <router-link to="/Episodes.vue">Episodes</router-link> -->
  </div>
</template>

<style lang="scss" scoped>
.body {
  min-height: 100%;
}
.mainPage {
  background: url("../assets/backgr.png") 50% 50% no-repeat;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  padding: 21rem;
  width: 100%;
  min-height: 100%;
}
</style>

<script>
export default {};
</script>
