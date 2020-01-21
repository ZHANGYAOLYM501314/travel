import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import waterfall from "vue-waterfall2";
// import Mint from 'mint-ui';
// Vue.use(Mint);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(waterfall);
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')