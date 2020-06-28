<template>
  <div class="spk-tabbar">
    <div v-for="(item, index) in barList" :key="index">
      <tab-content :path="item.path">
        <img
          slot="icon"
          :src="require('@/assets/img/tabbar/' + item.icon)"
          alt
        />
        <img
          slot="activeicon"
          :src="require('@/assets/img/tabbar/' + item.activeicon)"
          alt
        />
        <div slot="text">{{ item.text }}</div>
      </tab-content>
    </div>
  </div>
</template>

<script>
import tabContent from './tabContent.vue'
import barList from './barList.js' // 将数据抽离到barList.js 中

export default {
  name: 'maintabbar',
  components: {
    tabContent
  },
  data () {
    return {
      barList,
    }
  },
}
</script>

<style lang="scss" scoped>
.spk-tabbar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
  justify-content: space-around;
}
</style>