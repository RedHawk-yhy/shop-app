<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="#ff2d51">
      <van-swipe-item v-for="item in banners" :key="item">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      banners: [
        "https://s1.ax1x.com/2020/10/27/BQUnAS.jpg",
        "https://s1.ax1x.com/2020/10/27/BQUKhQ.jpg",
        "https://s1.ax1x.com/2020/10/27/BQUe78.jpg",
        "https://s1.ax1x.com/2020/10/27/BQUutg.jpg",
      ],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.my-swipe .van-swipe-item img {
  width: 100%;
}
</style>

