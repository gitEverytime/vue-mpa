import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    routes: [
        /**
         * 后台主页
         */
        {
            path: '/',
            redirect: '/index',
        },
        /**
         * 登录
         */
        // {
        //     path: '/index',
        //     name: 'index',
        //     component:(resolve) => require(['./views/index/Index.vue'],resolve),
        // },
    ]
});

export default router;