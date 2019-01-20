<template>
  <div>
    <div>minapp-api-promise</div>
    <van-cell-group>
      <van-cell v-for="(value, key) in info" :key="key" :title="key" :value="value"/>
    </van-cell-group>
  </div>
</template>

<script>
import WXP from 'minapp-api-promise'
export default {
  data() {
    return {
      info: {}
    }
  },
  created() {
    this.getSystemInfo()
  },
  methods: {
    async getSystemInfo() {
      const res = await WXP.getSystemInfo()
      console.log('系统信息', res)
      this.info = res
    }
  }
}
</script>

<style>
</style>
