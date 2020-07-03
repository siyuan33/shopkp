<template>
  <div class="home-recommend">
    <div
      v-for="(item, index) in recommendList"
      :key="index"
      class="home-recommend-item"
      @click="linkTo(item.link)"
    >
      <img :src="item.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'spk-home-component-recommend',
  data () {
    return {

    }
  },
  methods: {
    linkTo (url) {
      window.location = url
    }
  },
  props: {
    recommendList: {
      type: Array,
      default: []
    },
  },
}
</script>

<style scoped lang="scss">
.home-recommend {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 10px solid #eeeeee;
  padding-bottom: 6px;
  &-item {
    flex: 1;
    text-align: center;
    img {
      width: 80%;
      height: 80%;
      object-fit: contain;
      overflow: hidden;
      border-radius: 50%;
    }
  }
}
</style>
