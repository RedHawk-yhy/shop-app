<template>
  <div id="app">
    <router-view class="content"></router-view>
    <van-tabbar
      :route="true"
      v-model="active"
      :fixed="false"
      active-color="#ff2d51"
    >
      <van-tabbar-item :to="{ name: 'Home' }" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item :to="{ name: 'List' }" icon="fire-o"
        >热卖</van-tabbar-item
      >
      <van-tabbar-item
        :to="{ name: 'Cart' }"
        icon="cart-o"
        :badge="cartCount == 0 ? '' : cartCount"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item :to="{ name: 'User' }" icon="contact"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { isLogined } from "./utils/tools";
export default {
  data() {
    return {
      active: 0,
    };
  },
  created() {
    if (isLogined()) {
      this.loadCartsFromServer();
    }
  },
  computed: {
    ...mapGetters("cart", ["cartCount"]),
  },
  methods: {
    ...mapActions("cart", ["loadCartsFromServer"]),
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow: auto;
}
</style>
