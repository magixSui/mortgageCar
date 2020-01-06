<template>
  <div class="mb-buy">
    <header class="header">
      <van-icon name="chat-o" size="1.6rem" />
      <van-search class="search" placeholder="请输入搜索关键词" v-model="search" />
      <van-icon name="service-o" size="1.6rem" />
    </header>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-card
          v-for="(item, index) in list"
          :key="index"
          num="1"
          :price="item.price"
          :title="item.title"
          :thumb="car"
          @click="routeTo"
        >
          <div slot="tags">
            <van-tag plain type="danger">{{ item.displacement }}|{{ item.drive }}</van-tag>
            <van-tag plain type="danger">{{ item.date | dateFilter }}/{{ item.mileage }}公里</van-tag>
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
import car from "@/assets/images/car.jpg";

export default {
  name: "mb_buy",
  data() {
    return {
      query: {
        index: 0,
        count: 10
      },
      car,
      search: "",
      count: 0,
      isLoading: false,
      list: [],
      loading: false,
      finished: false
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
      this.axios.get("mortage/car/list", { params: data }).then(res => {
        this.list = res.data.cars;
      });
    },
    onRefresh() {
      this.$set(this.query, 'index', 0);
      this.axios.get("mortage/car/list", { params: this.query }).then(res => {
        this.list = res.data.cars;
        this.isLoading = false;
      });
    },
    onLoad() {
      // 异步更新数据
      this.axios.get("mortage/car/list", { params: this.query }).then(res => {
        this.$set(this.query, 'index', ++this.query.index);
        this.list = this.list.concat(res.data.cars);
        this.loading = false;
        if (this.list.length >= res.data.length) {
          this.finished = true;
        }
      });
    },
    routeTo() {
      this.$router.push("detail");
    }
  }
};
</script>

<style lang="scss">
.mb-buy {
  .header {
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0 0.6rem;
  }
  .search {
    flex-grow: 1;
  }
  .van-list {
    // margin-bottom: 50px;
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
}
</style>