<template>
  <div class="mb-buy">
    <header class="header">
      <van-icon name="chat-o" size="1.6rem" />
      <van-search class="search" placeholder="请输入搜索关键词" v-model="search" />
      <van-icon name="service-o" size="1.6rem" />
    </header>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <van-card
      v-for="(item, index) in list"
        :key="index"
        num="1"
        price="302500.00"
        title="奥迪TT2015款2.0T自动"
        :thumb="car"
        @click="routeTo"
      >
        <div slot="tags">
          <van-tag plain type="danger">45TFS|四驱</van-tag>
          <van-tag plain type="danger">2015/7.7公里</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini">收藏</van-button>
        </div>
      </van-card>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import car from '@/assets/images/car.jpg';

export default {
  name: 'mb_buy',
  data() {
    return {
      car,
      search: '',
      count: 0,
      isLoading: false,
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    routeTo() {
      this.$router.push('detail');
    }
  }
}
</script>

<style lang="scss">
  .mb-buy {
    .header {
     height:3rem;
     display:flex;
     align-items: center;
     padding:0 .6rem;
   }
   .search {
     flex-grow:1;
   }
   .van-list {
     margin-bottom:50px;
   }
   .van-image {
     img {
       object-fit:cover !important;
     }
   }
   .van-card__content {
    flex-direction: column;
    justify-content: space-between;
   }
   .van-card__price {
     color:#323233;
     font-weight:500;
   }
  }
</style>