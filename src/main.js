import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import zhCn from 'element-plus/es/locale/lang/zh-cn'

import './assets/main.css';

const app = createApp(App);

// 使用路由
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

router.beforeEach((to,from,next)=>{
	sessionStorage.setItem('isLogin','true');
	
	let isLogin=sessionStorage.getItem('isLogin');
	
	sessionStorage.clear();
	
	console.log(isLogin);
})

app.mount('#app');