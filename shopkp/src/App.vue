<template>
  <div id="app">
    <router-view />
    <tabContent></tabContent>
  </div>
</template>

<script>
import tabContent from './components/tabBar/tabWrap.vue';

export default {
  name: "app",
  components: {
    tabContent,
  },
}
</script>
<style lang="scss">
@import "./assets/css/index.css";
</style>
