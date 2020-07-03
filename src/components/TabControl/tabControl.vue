<template>
  <div class="tab-wrap">
    <div class="tab-control">
      <div
        @click="changeIndex(index)"
        v-for="(item, index) in title"
        :key="index"
        class="tab-control-item"
        :class="{ active: index === choosenIndex }"
      >
        <span style="display: inline-block;width: 50%;">{{ item }}</span>
      </div>
    </div>
    <div class="tab-bottom-transiton">
      <div
        class="tab-bottom-transiton-block"
        :style="transitonBlockStyle"
        style="height:100%;"
      >
        <div
          ref="blockSelf"
          class="tab-bottom-transiton-block-self"
          style="height:100%;"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
// animation: blockWidthChange 1s;

export default {
  name: 'tabControl',
  data () {
    return {
      choosenIndex: 0,
    }
  },
  methods: {
    changeIndex (index) {
      this.choosenIndex = index;
      const node = this.$refs.blockSelf
      // if (node.classList[1] === "block-width-animation") {
      //   node.style.WebkitAnimationPlayState = "paused"
      //   console.log(node.style)
      // }
      node.classList.add("block-width-animation")
      node.addEventListener("webkitAnimationEnd", function callback () {
        node.classList.remove("block-width-animation")
        node.removeEventListener("webkitAnimationEnd", callback)
      })
    }
  },
  computed: {
    transitonBlockStyle () {
      const w = this.title.length === 0 ? 0 + "%" : (100 / this.title.length) / 2 + "%"  //宽度计算
      let l = 0 + "%"
      if (this.title.length !== 0) {
        l = (100 / this.title.length) / 4 + (100 / this.title.length) * this.choosenIndex + "%"
      }
      return `width:${w};left:${l}`
    }
  },
  props: {
    title: {
      type: Array,
      default () {
        return []
      }
    },
  },
}
</script>

<style scoped lang="scss">
.block-width-animation {
  animation: blockWidthChange 1s;
}
@keyframes blockWidthChange {
  0% {
    width: 100%;
    left: 0;
  }
  50% {
    width: 150%;
    left: -25%;
  }
  100% {
    width: 100%;
    left: 0;
  }
}
.tab-wrap {
  .tab-bottom-transiton {
    height: 5px;
    background-color: #eee;
    &-block {
      position: relative;
      transition: left 0.25s ease;
      &-self {
        height: 100%;
        width: 100%l;
        background-color: var(--color-theme);
        position: relative;
      }
    }
  }
  .tab-control {
    display: flex;
    text-align: center;
    margin-top: 44px;
    height: 44px;
    line-height: 44px;
    &-item {
      flex: 1;
      &.active {
        & span {
          // border-bottom: 2px solid var(--color-theme);
          color: var(--color-theme);
        }
      }
    }
  }
}
</style>
