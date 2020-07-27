import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
Vue.use(ElementUI, { locale })
import axios from 'axios';
import requestUtil from './utils/requestUtil.js'
Vue.prototype.$http = axios.create({
  timeout: 60000
});
Vue.prototype.$requestUtil=requestUtil;
new Vue({
  render: h => h(App),
}).$mount('#app')
