<template>
  <div class="">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in carouselList" :key="index">
        <img
          :src="item.image"
          alt=""
          style="width: 100%;object-fit: cover;height: 100%;"
          @click="linkTo(item.link)"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: '',
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
    carouselList: {
      type: Array,
      default: []
    },
  },
  mounted () {
    
  },
}
</script>

<style scoped lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
