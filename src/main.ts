import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store/index'
import registerIcons from './global/register-icons'
// 1 全局注册element-plus：方便和简洁
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// app.use(ElementPlus)
// 2 按需引入

const app = createApp(App)
app.use(registerIcons)
app.use(router)
app.use(pinia)

app.mount('#app')
