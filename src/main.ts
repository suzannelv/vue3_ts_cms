import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store/index'
import registerIcons from './global/register-icons'
// 0 针对ElMessage和Elloading等组件引入样式
import 'element-plus/theme-chalk/el-message.css'
// 1 全局注册element-plus：方便和简洁
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// app.use(ElementPlus)
// 2 按需引入
// 3.使用插件vite-plugin-style-import
/**步骤：
 * npm install vite-plugin-style-import
 * 依赖包：npm install consola -D
 * 在vite.config.ts配置
 */

const app = createApp(App)
app.use(registerIcons)
app.use(router)
app.use(pinia)

app.mount('#app')
