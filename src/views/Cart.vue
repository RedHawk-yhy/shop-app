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
        <van-button icon="minus" color="#7232dd" plain size="mini" @click="minusBtn(item)" :disabled="item.quantity==1?true:false"/>
        <span class="number"> {{item.quantity}}</span>
        <van-button icon="plus" color="#7232dd" size="mini" plain @click="plusBtn(item)"/>
      </template>
    </van-card>
  </div>
</template>

<script>
import { loadCarts,addToCart } from "../services/carts";
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
    // console.log(this.cartsList);
  },
  methods: {
    async minusBtn(item){
      item.quantity -= 1
      await addToCart(item._id,-1)
      
    },
    async plusBtn(item){
      item.quantity += 1
      await addToCart(item._id,1)
    }
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
