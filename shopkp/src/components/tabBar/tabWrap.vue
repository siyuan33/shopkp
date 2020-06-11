<template>
  <tabbar>
    <tab-content path="/home">
      <img slot="icon" src="../../assets/img/tabbar/home.png" alt />
      <img slot="activeicon" src="../../assets/img/tabbar/homered.png" alt />
      <div slot="text">首页</div>
    </tab-content>

    <tab-content path="/classify">
      <img slot="icon" src="../../assets/img/tabbar/fenlei.png" alt />
      <img slot="activeicon" src="../../assets/img/tabbar/fenleired.png" alt />
      <div slot="text">分类</div>
    </tab-content>

    <tab-content path="/cart">
      <img slot="icon" src="../../assets/img/tabbar/gwc.png" alt />
      <img slot="activeicon" src="../../assets/img/tabbar/gwcred.png" alt />
      <div slot="text">购物车</div>
    </tab-content>

    <tab-content path="/mine">
      <img slot="icon" src="../../assets/img/tabbar/me.png" alt />
      <img slot="activeicon" src="../../assets/img/tabbar/mered.png" alt />
      <div slot="text">我的</div>
    </tab-content>
  </tabbar>
</template>

<script>
import tabbar from './tab.vue'
import tabContent from './tabContent.vue'
export default {
  name: 'maintabbar',
  components: {
    tabbar,
    tabContent
  }
}
</script>

<style lang="scss" scoped>
</style>