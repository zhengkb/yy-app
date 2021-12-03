import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App);
app.use(ElementPlus).use(store).use(router).mount("#app");