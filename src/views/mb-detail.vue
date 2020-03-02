<template>
  <div class="mb-detail">
    <van-swipe class="swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <div class="grey-cube"></div>

    <section class="box f-row">
      <span class="price">{{ car.price }}</span>
      <div>
        <a class="phone" href="tel:400-0000-688">电话咨询</a>
        <!-- <van-button type="primary" >电话咨询</van-button> -->
        <!-- <van-button type="primary">我要砍价</van-button> -->
      </div>
    </section>

    <div class="grey-line"></div>

    <section class="content">
      <h1 class="title">{{ car.title }}</h1>
      <img v-for="(item, index) in car.images" class="image" :src="item" :key="index"/>
      <section>
        <span class="mr-4">售后</span><van-tag class="mr-4" color="blue">包退</van-tag><van-tag class="mr-4" color="#f2826a">包置换</van-tag><van-tag color="#999">车丢包赔</van-tag>
      </section>
      <section>
        <span class="mr-4">物流</span><van-tag class="mr-4" color="green">无忧物流</van-tag><van-tag color="#7232dd">送货到家</van-tag>
      </section>

      <h1 class="title">车辆档案</h1>
      <table border=1>
        <tr>
          <td>驱动</td><td>{{ car.drive }}</td><td>行驶里程</td><td>{{ car.mileage }}万公里</td>
        </tr>
        <tr>
          <td>排量</td><td>{{ car.displacement }}</td><td>年份</td><td>{{ car.date.substring(0, 4) }}</td>
        </tr>
      </table>

      <h1 class="title">服务保障</h1>
      <section class="info">
        <van-row style="margin-bottom:10px;">
          <van-col span="12">车辆手续把关</van-col>
          <van-col span="12">车辆信息保证真实</van-col>
        </van-row>
        <van-row>
          <van-col span="12">车辆丢失包赔</van-col>
          <van-col span="12">无泡水、无火烧、无重大事故</van-col>
        </van-row>
      </section>
    </section>
    <p class="small-foot">赤兔抵押车  只卖放心好车</p>
    <p class="small-foot">买的放心  用的安心</p>
  </div>
</template>

<script>
import image1 from '@/assets/images/apple-1.jpg'
import image2 from '@/assets/images/apple-2.jpg'
import image3 from '@/assets/images/apple-3.jpg'
import API from 'utils/api';

export default {
  name: 'mb_detail',
  data() {
    return {
      images: [image1, image2, image3],
      car: {}
    }
  },
  mounted() {
    this.axios.get(API.car.query, { params: {
      id: this.$route.params._id
    } }).then(res => {
      this.car = res.data.car;
    });
  }
}
</script>

<style lang="scss">
  .mb-detail {
    .f-row {
      display:flex;
    }
    .mr-4 {
      margin-right:4px;
    }
    .content {
      padding:0 1rem;
    }
    .box {
      align-items: center;
      justify-content: space-between;
      padding:1rem;
      .price {
        font-size:1.2rem;
        color:crimson;
      }
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
   .title {
     border-left: 4px solid #38f;
     font-size:1.1rem;
     padding:0 .2rem;
   }
   .image {
     width:100%;
     margin-bottom:1rem;
   }
   .phone {
     color:#fff;
     background:#07c160;
     padding:.6rem 1rem;
     border-radius: 5px;
   }
   .info {
     font-size:.8rem;
     color:#38f;
     border:1px solid #ececec;
     border-radius: .4rem;
     padding:1rem;
   }
   .small-foot {
     font-size:.6rem;
     display:flex;
     color:#999;
     justify-content: center;
   }
   table {
     font-size:.8rem;
     color:#999;
     td {
       padding:.2rem;
     }
   }
  }
</style>