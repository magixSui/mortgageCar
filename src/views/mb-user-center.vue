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
      <van-grid-item>
        <i class="iconfont icon-list" style="color:#29ab91"></i>
        <span>车源管理</span>
      </van-grid-item>
      <van-grid-item>
        <i class="iconfont icon-dailizhanghaoguanli" style="color:#f1594b"></i>
        <span>代理佣金</span>
      </van-grid-item>
    </van-grid>

    <div class="grey-cube"></div>

    <h1 class="title">常用功能</h1>
    <van-grid :column-num="3">
      <van-grid-item>
        <i class="iconfont icon-shiming" style="color:#318fd5"></i>
        <span>实名认证</span>
      </van-grid-item>
      <van-grid-item>
        <i class="iconfont icon-anquan" style="color:#f39927"></i>
        <span>公司认证</span>
      </van-grid-item>
      <van-grid-item>
        <i class="iconfont icon-declare" style="color:#29ab91"></i>
        <span>免责声明</span>
      </van-grid-item>
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
    .iconfont {
     font-size:1.6rem;
     color:#318fd5;
   }
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