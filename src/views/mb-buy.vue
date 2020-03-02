<template>
  <div class="mb-buy">
    <!-- <header class="header">
      <van-icon name="chat-o" size="1.6rem" />
      <van-search class="search" placeholder="请输入搜索关键词" v-model="search" />
      <van-icon name="service-o" size="1.6rem" />
      <i class="iconfont icon-zhishi" style="color:#29ab91" @click="onPupup"></i>
    </header> -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-card
          v-for="(item, index) in list"
          :key="index"
          num="1"
          :price="item.price"
          :title="item.title"
          :thumb="item.images[0]"
          @click="routeTo(item)"
        >
          <div slot="tags">
            <van-tag plain type="danger">{{ item.displacement }}|{{ item.drive }}</van-tag>
            <van-tag plain type="danger">{{ item.date | dateFilter }}/{{ item.mileage }}公里</van-tag>
          </div>
          <div slot="footer">
            <!-- <van-button size="mini">收藏</van-button> -->
          </div>
        </van-card>
      </van-list>
    </van-pull-refresh>
    <van-popup
      v-model="isShowPup"
      closeable
      position="right"
      :style="{ height: '100%' }"
    >
      <div class="propertyContainer">111</div>
    </van-popup>
  </div>
</template>

<script>
// import car from "@/assets/images/car.jpg";
import API from 'utils/api';

export default {
  name: "mb_buy",
  data() {
    return {
      query: {
        index: 0,
        count: 10
      },
      // car,
      search: "",
      count: 0,
      isLoading: false,
      list: [],
      loading: false,
      finished: false,
      isShowPup: false,
      prices: [{key:'0', value:'5万以下'}, {key:'1', value:'50-10万'}, {key:'2', value:'10-20万'}, {key:'3', value:'20万以上'}],
      displacements: [{key:'0', value:'1.0以下'}, {key:'1L', value:'1-2L'}, {key:'2', value:'2-3L'}, {key:'3', value:'3L以上'}],
    };
  },
  created() {
    // this.getData(this.query);
  },
  filters: {
    dateFilter(date) {
      return new Date(date).getFullYear();
    }
  },
  methods: {
    getData(data) {
      this.axios.get(API.car.list, { params: data }).then(res => {
        this.list = res.data.cars;
      });
    },
    onRefresh() {
      this.$set(this.query, 'index', 0);
      this.axios.get(API.car.list, { params: this.query }).then(res => {
        this.list = res.data.cars;
        this.isLoading = false;
      });
    },
    onLoad() {
      // 异步更新数据
      this.axios.get(API.car.list, { params: this.query }).then(res => {
        this.$set(this.query, 'index', ++this.query.index);
        this.list = this.list.concat(res.data.cars);
        this.loading = false;
        if (this.list.length >= res.data.length) {
          this.finished = true;
        }
      });
    },
    routeTo(item) {
      console.log(item);
      this.$router.push({
        name: 'detail',
        params: {
          _id: item._id
        }
      });
    },
    onPupup() {
      this.isShowPup = true;
    }
  }
};
</script>

<style lang="scss">
.mb-buy {
  .iconfont {
     font-size:1.6rem;
   }
  .header {
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0 0.6rem;
  }
  .search {
    flex-grow: 1;
  }
  .van-image {
    img {
      object-fit: cover !important;
    }
  }
  .van-card__content {
    flex-direction: column;
    justify-content: space-between;
  }
  .van-card__price {
    color: #323233;
    font-weight: 500;
  }
  .propertyContainer {
    padding:1rem;
  }
}
</style>