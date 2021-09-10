import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import {Input, Icon,Popover,Button} from 'element-ui'

Vue.config.productionTip = false
Vue.use(Icon)
Vue.use(Input)
Vue.use(Popover)
Vue.use(Button)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
