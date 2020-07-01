<template>
  <div>
    <header class="spk-header">
      <navigation>
        <template v-slot:left> </template>
        <template v-slot:center>
          <span>购物区</span>
        </template>
        <template v-slot:right> </template>
      </navigation>
    </header>
    <carousel-list :carouselList="carouselList"></carousel-list>
  </div>
</template>

<script>
import navigation from "../Navigation/index.js"
import carouselList from './carouselList.vue';
export default {
  name: 'spk-home-component',
  components: {
    navigation,
    carouselList,
  },
  data () {
    return {
      carouselList: [],
    }
  },
  async mounted () {
    const { data: { success, data: d } } = await this.$http(this.$mainApi, "/home/multidata")
    if (success === true) {
      this.carouselList = d.banner.list
    }
  },
}
</script>

<style scoped lang="scss">
.spk-header {
  background-color: var(--color-theme);
  color: #ffffff;
}
</style>
