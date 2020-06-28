<template>
  <div class="navigation">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  justify-content: flex-start;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  .left {
    flex: 1;
  }
  .center {
    flex: 4;
  }
  .right {
    flex: 1;
  }
}
</style>
