import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import App from '../App.vue'
// import HelloWorld from "../components/HelloWorld.vue"
// import TheWelcome from "../components/TheWelcome.vue"





const routers=[
	{ path: "/", redirect: "/home" },
	{
		path:'/HelloWorld/:id',
		name:"HelloWorld",
		component: () => import('../components/HelloWorld.vue'),
		props:true
	},
	{
		path:'/TheWelcome',
		name:"TheWelcome",
		component: () => import('../components/TheWelcome.vue'),
		children:[
		      // {
		      //   //二级导航的路径不要加/
		      //   path:'me',
		      //   component:()=>import('/views/AboutSub/Aboutme.vue')
		      // },
		      // {
		      //   path:'info',
		      //   component:()=>import('/views/AboutSub/Aboutinfo.vue')
		      // }
		    ]
	},
	{
		path : '/:pathMatch(.*)',
		component: () => import('../components/404.vue')
	}
]
const router=createRouter({

        history: createWebHashHistory(),
        routes: routers,

})

export default router