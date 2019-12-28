import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.baseUrl = 'http://zhongwang.sdyilian.top/index.php/zwapi/'

import globalData from 'global/global.js'
Vue.prototype.globalData = globalData


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
