<template>
  <div>
    {{ dataSource }}
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {
    dataSource: {
      type: [Array, Object],
      default: []
    },
  },
}
</script>

<style scoped>
</style>
