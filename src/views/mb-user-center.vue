<template>
  <div class="mb-user-center">
    <header class="header">
      <span>你好119999999</span>
      <van-icon name="user-o" color="#318fd5" size="1.6rem" />
    </header>

    <van-grid :column-num="2">
      <van-grid-item>
        <span class="mb-4">8</span>
        <span>购物车</span>
      </van-grid-item>
      <van-grid-item>
        <span class="mb-4">81</span>
        <span>浏览记录</span>
      </van-grid-item>
    </van-grid>

    <div class="grey-cube"></div>

    <van-grid :column-num="2">
      <van-grid-item icon="photo-o" text="车源管理" />
      <van-grid-item icon="photo-o" text="代理佣金" />
    </van-grid>

    <div class="grey-cube"></div>

    <h1 class="title">常用功能</h1>
    <van-grid :column-num="3">
      <van-grid-item icon="photo-o" text="实名认证" />
      <van-grid-item icon="photo-o" text="公司认证" />
      <van-grid-item icon="photo-o" text="免责声明" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'mbUserCenter'
}
</script>

<style lang="scss">
  .mb-user-center {
    .header {
      display:flex;
      align-items:center;
      justify-content: space-between;
      padding:2rem 1rem;
    }
    .mb-4 {
      margin-bottom:4px;
    }
    .title {
      font-size:1.2rem;
    }
  }
</style>