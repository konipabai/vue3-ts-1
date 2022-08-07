import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 完整引入需要配置的东西------------------------------
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// ------------------------------------------------
// 完整引入的写法-------------------------------------
// createApp(App).use(router).use(ElementPlus).mount('#app')
// ------------------------------------------------

createApp(App).use(router).mount('#app')