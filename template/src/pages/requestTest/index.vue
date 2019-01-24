<template>
  <div>
    <button @tap="handleGet">GET 请求</button>
    <button @tap="handleGet1">GET 请求1</button>
    <button @tap="handlePost">POST 请求</button>
    <button @tap="handlePost1">POST 请求1</button>
  </div>
</template>

<script>
import {
  getPersonByGet,
  getPersonByPost,
  getPersonByGet1,
  getPersonByPost1
} from '@/api/testRequest'
export default {
  methods: {
    async handleGet() {
      const res = await getPersonByGet()
      console.log('GET 请求的数据', res)
    },
    async handlePost() {
      const res = await getPersonByPost({
        name: '你好',
        age: 20
      })
      console.log('POST 请求的数据', res)
    },
    async handleGet1() {
      const res = await getPersonByGet1()
      console.log('GET1 请求的数据', res)
    },
    async handlePost1() {
      const res = await getPersonByPost1({
        name: '你好',
        age: 20
      })
      console.log('POST1 请求的数据', res)
    }
  }
}
</script>

<style>
</style>

<config>
{
  navigationBarTitleText: '接口请求测试'
}
</config>
