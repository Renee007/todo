import Vue from 'vue'

import App from './App' // 根组件
import router from './router'

new Vue({
	router: router,
	render: h => h(App),
	
}).$mount('#root')
