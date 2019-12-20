<template>
  <div class="mb-sell">
    <van-cell-group>
      <van-field v-model="car.name" label="车型" placeholder="请输入车型" />
      <van-field v-model="car.year" label="年份" placeholder="请输入年份" />
      <van-field v-model="car.mileage" label="里程" placeholder="请输入行驶里程" />
      <van-field v-model="car.drive" label="驱动" placeholder="请输入驱动" />
      <van-field v-model="car.displacement" label="排量" placeholder="请输入排量" />
    </van-cell-group>
    <div class="btn-container">
      <van-button class="button" type="primary" size="large">保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mb_sell',
  data() {
    return {
      car: {

      }
    }
  }
}
</script>

<style lang="scss">
  .mb-sell {
    .button {
      margin-top:1rem;
    }
    .btn-container {
      padding:0 1rem;
    }
  }
</style>