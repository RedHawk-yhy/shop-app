<template>
  <div class="detail">
    <h1>{{ product.name }}</h1>
  </div>
</template>

<script>
// import axios from "axios";
import { loadProductDetail } from "../services/products";
export default {
  name: "Detail",
  data() {
    return {
      product: {},
    };
  },
  watch: {
    $route() {
      this.loadData();
    },
  },
  created() {
    console.log("组件创建成功");
    this.loadData();
  },
  methods: {
    async loadData() {
      if (this.$route.query.id) {
        const result = await loadProductDetail(this.$route.query.id);
        this.product = result;
      }
    },
  },
};
</script>

<style scoped>
</style>