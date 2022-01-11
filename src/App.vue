<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "RickAndMorty",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #18192b;
  background-color: #0faebf;
}
.btn.btn-success {
  background-color: #41a632;
}
.border-success {
  border-color: #41a632;
}
hr.long {
  max-width: 8em;
}
</style>
