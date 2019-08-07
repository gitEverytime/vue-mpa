import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../../vuex/store'
import http   from '../../axios.js';
import api     from '../../api/apiBase.js'


/**
 * 全局配置common方法
 */
Object.assign(Vue.prototype,{
    http,         //ajax封装的请求
    api,          //接口地址全局封装
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#after');