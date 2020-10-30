<template>
  <div class="goods">
    <h2>商品列表</h2>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="item in products"
        :key="item._id"
        :num="item.quantity"
        :price="item.price"
        desc="描述信息"
        :title="item.name"
        :thumb="item.coverImg | dalImg"
        :thumb-link="'/#/detail?id=' + item._id"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button @click="buyHandle(item)" size="mini"
            >加入购物车</van-button
          >
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script>
// import axios from "axios";
import { mapActions } from "vuex";
import { loadProducts } from "../services/products";
import { addToCart } from "../services/carts";
export default {
  name: "List",
  data() {
    return {
      products: [],
      loading: false,
      finished: false,
      pages: 1, // 总页码
      page: 1,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    ...mapActions('cart',['loadCartsFromServer']),
    async loadData() {
      this.loading = true;
      const result = await loadProducts({ page: this.page });
      this.products = [...this.products, ...result.products];
      this.pages = result.pages;
      this.page++;
      this.loading = false;

      // console.log(this.products);
    },
    async buyHandle(item) {
      const res = await addToCart(item._id, 1);
      console.log(res);
      this.loadCartsFromServer()
    },
    onLoad() {
      if (this.page > this.pages) {
        this.finished = true;
      } else {
        this.loadData();
      }
    },
    /*     jumpBtn(v) {
      window.location.href = "/#/detail?id=" + v;
    }, */
  },
};
</script>

<style scoped>
.goods {
  padding: 1rem;
}
</style>