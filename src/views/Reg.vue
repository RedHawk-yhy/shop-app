<template>
  <div class="login">
    <img src="../assets/logo.png" alt="" class="logo" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="rePwd"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <div class="link">
      <router-link :to="{ name: 'Login' }"
        >已有账号？<span>立即登录</span></router-link
      >
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
import { regApi } from "../services/auth";
export default {
  name: "Login",
  methods: {
    async onSubmit() {
      if (this.password == this.rePwd) {
        //  调用接口
        const result = await regApi({
          userName:this.username,
          password:this.password
        })
        console.log(result);
        if(result.code == "success"){
          localStorage.setItem("token",result.token)
          this.$router.push({
            name:"User"
          })
        }else{
          Notify({
          type: "danger",
          message: result.message,
        });
        }
      } else {
        Notify({
          type: "danger",
          message: "两次输入密码不一致",
        });
      }
    },
  },
  data() {
    return {
      username: "",
      password: "",
      rePwd: "",
    };
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  width: 100%;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.link {
  width: 100%;
}
.link a {
  float: right;
  margin-right: 1.5rem;
  font-size: 0.8rem;
  color: blue;
}
.link a span {
  text-decoration: underline;
}
</style>