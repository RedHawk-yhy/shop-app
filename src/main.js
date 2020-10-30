import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store'
import App from './App.vue'
import router from './router'
import {serverUrl} from './utils/tools'

Vue.config.productionTip = false
Vue.use(Vant)

Vue.filter("dalImg",(str)=>{
  if(str){
    if(str.startsWith('http')){
      return str
    }else{
      return serverUrl + str
    }
  }else{
    return 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1216201338,1824521564&fm=26&gp=0.jpg'
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
