<template>
  <div>
    <div>测试 postcss</div>
    <div class="flex">
      <div class="item">item</div>
      <div class="item">item</div>
      <div class="item">item</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.flex {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.item {
  flex: 1;
  height: 30px;
  line-height: 30px;
  background: #7c7c7c;
}
</style>
