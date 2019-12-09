<template>
  <div class="mb-main">
    <header class="header">
      <van-icon name="chat-o" size="1.6rem" />
      <van-search class="search" placeholder="请输入搜索关键词" v-model="search" />
      <van-icon name="service-o" size="1.6rem" />
    </header>
    <van-swipe class="swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <section class="modules clearfix">
      <div class="module">
        <van-icon name="shopping-cart" color="#318fd5" size="1.6rem" />
        <span>买车</span>
      </div>
      <div class="module">
        <van-icon name="gold-coin" color="#f39927" size="1.6rem" />
        <span>卖车</span>
      </div>
      <div class="module">
        <van-icon name="exchange" color="#f1594b" size="1.6rem" />
        <span>代理</span>
      </div>
      <div class="module">
        <van-icon name="gold-coin" color="#29ab91" size="1.6rem" />
        <span>估价</span>
      </div>
      <div class="module">
        <van-icon name="question" color="#29ab91" size="1.6rem" />
        <span>赤兔知识</span>
      </div>
      <div class="module">
        <van-icon name="comment" color="#f1594b" size="1.6rem" />
        <span>公司资质</span>
      </div>
      <div class="module">
        <van-icon name="pending-payment" color="#f39927" size="1.6rem" />
        <span>最近成交</span>
      </div>
      <div class="module">
        <van-icon name="youzan-shield" color="#318fd5" size="1.6rem" />
        <span>安全保障</span>
      </div>
    </section>

    <div class="grey-cube"></div>

    <section class="section">
      <van-button class="shop-btn" icon="cart-o" type="primary">立即选购</van-button>
    </section>

    <div class="grey-cube"></div>

    <h3 class="sub-title">好生活没那么贵</h3>
    <section class="sub-modules clearfix">
      <div class="sub-module">
        <van-icon name="shopping-cart" color="#318fd5" size="1.6rem" />
        <span>农民</span>
      </div>
      <div class="sub-module">
        <van-icon name="gold-coin" color="#f39927" size="1.6rem" />
        <span>学生</span>
      </div>
      <div class="sub-module">
        <van-icon name="exchange" color="#f1594b" size="1.6rem" />
        <span>老婆</span>
      </div>
      <div class="sub-module">
        <van-icon name="gold-coin" color="#29ab91" size="1.6rem" />
        <span>改装</span>
      </div>
      <div class="sub-module">
        <van-icon name="question" color="#29ab91" size="1.6rem" />
        <span>创业</span>
      </div>
      <div class="sub-module">
        <van-icon name="comment" color="#f1594b" size="1.6rem" />
        <span>滴滴</span>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import image1 from '@/assets/images/apple-1.jpg'
import image2 from '@/assets/images/apple-2.jpg'
import image3 from '@/assets/images/apple-3.jpg'
import { Lazyload } from 'vant';

Vue.use(Lazyload);
export default {
  name: 'mb-main',
  data() {
    return {
      search: '',
      images: [image1, image2, image3]
    }
  }
}
</script>

<style lang="scss">
 .mb-main {
   .header {
     height:3rem;
     display:flex;
     align-items: center;
     padding:0 .6rem;
   }
   .search {
     flex-grow:1;
   }
   .swipe {
     width:100%;
     height:50vw;
     img {
       width:100%;
       height:50vw;
       object-fit:contain;
     }
   }
   .modules, .sub-modules {
     margin-top:.6rem;
     font-size:.8rem;
     color:#494949;
     .module {
       width:23%;
       float:left;
       display:flex;
       flex-flow:column;
       align-items: center;
       justify-content: center;
       margin:1%;
       i {
         margin-bottom:.1rem;
       }
     }
     .sub-module {
       width:31%;
       float:left;
       display:flex;
       flex-flow:column;
       align-items: center;
       justify-content: center;
       margin:1%;
       padding:1rem 0;
       background:#f9f9f9;
       i {
         margin-bottom:.1rem;
       }
     }
   }
   .section {
     display:flex;
     justify-content: center;
     padding:1rem 0;
     .shop-btn {
       width:50vw;
       border-radius:4rem;
     }
   }
   .sub-title {
     margin-left:.6rem;
   }
 }
</style>