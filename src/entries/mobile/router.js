import Vue from 'vue'
import Router from 'vue-router'
import store from '../../vuex/store'
import cookie   from '../../assets/js/common/cookie.js'
Vue.use(Router);

const vm = new Vue({
    store
});

const router_mobile = new Router({
    routes: [
        /**
         * 登录
         */
        {
            path: '/',
            name: 'login',
            component:(resolve) => require(['./views/index/Index.vue'],resolve),
        },
    ]
});

export default router_mobile;
/**
 * 路由之前做的事情
 */
// router_mobile.beforeEach((to, from, next) => {
//     if(to.matched.length === 0){
//         next({
//             path:'/404'   //匹配不到path路由404页面
//         })
//     }else{
//         let token = cookie.get('xianyu_token');
//         if(!token&&to.name!=='login'){
//             next({
//                 path:'/login'
//             });
//             return;
//         }
//         if(token&&to.name==='login'){
//             next({
//                 path:'/home'
//             });
//             return;
//         }
//         next()
//     }
//
// });