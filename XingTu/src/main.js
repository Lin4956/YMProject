import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
//引入pinia
//引入初始化样式文件
import '@/styles/common.scss'
//测试接口函数
import { getBillboard } from '@/apis/billboard'
getBillboard().then( res => {
    console.log(res)
})
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
