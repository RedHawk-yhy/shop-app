<template>
  <div class="cart">
    <h2>我的购物车</h2>
    <van-checkbox v-model="checkAll">全选</van-checkbox>
    <van-card
      v-for="item in cartsList"
      :key="item._id"
      :num="item.quantity"
      :price="item.product.price * item.quantity"
      :title="item.product.name"
      :thumb="item.product.coverImg | dalImg"
    >

      <template #footer>
        <van-button icon="minus" color="#7232dd" plain size="mini"/>
        <span class="number"> {{item.quantity}}</span>
        <van-button icon="plus" color="#7232dd" size="mini" plain/>
      </template>
    </van-card>
  </div>
</template>

<script>
import { loadCarts } from "../services/carts";
export default {
  name: "Cart",
  data() {
    return {
      cartsList: [],
      checkAll:false
    };
  },
  async created() {
    const res = await loadCarts();
    this.cartsList = res;
    console.log(this.cartsList);
  },
};
</script>

<style scoped>
.cart {
  padding: 1rem;
}
.number{
  font-size: 1rem;
}
</style>
