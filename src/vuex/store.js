import Vue from 'vue'
import Vuex from 'vuex'
import CloudStore   from './cloud_store'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        CloudStore,

    }
})

/**
 * 调用规则说明
 */
/**
 * 改变/存贮状态
 * this.$store.commit('setInfo','fanwenqiang');
 * 获取状态
 * this.$store.getters.getInfo;
 * 页面获取方法
 * computed:{
 *  ...mapGetters([
 *     'modules gettter对象里面的变量'
 *  ]}
 *  ...mapState([
 *      'modules state对象里面的变量'
 *  ])
 * }
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

