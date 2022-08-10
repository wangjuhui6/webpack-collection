import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@wjh/vue-demo-md-plugin/index.less";

createApp(App).use(store).use(router).mount("#app");
