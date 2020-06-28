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
  </div>
</template>

<script>
import navigation from "../Navigation/index.js"
export default {
  name: 'spk-home-component',
  components: {
    navigation,
  },
  data () {
    return {

    }
  },
  async mounted () {
    const { data } = await this.$http(this.$mainApi, "/home/multidata")
    debugger
  },
}
</script>

<style scoped lang="scss">
.spk-header {
  background-color: var(--color-theme);
  color: #ffffff;
}
</style>
