/**
 * 入口js   若是飘红，进入设置中eslint设置，Enable取消勾选
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
    el:'#app',
    render: h => h(App),
    router
})