import { createApp } from "vue";
import { createPinia } from "pinia";
import NProgress from "nprogress";
import "./style.scss";
import "ant-design-vue/dist/reset.css";

import App from "./App.vue";
import { router } from "./router";
import { registerLayouts } from "./layouts/register";

NProgress.configure({
  parent: "#layout-content",
  showSpinner: false,
});

const app = createApp(App).use(createPinia()).use(router);

registerLayouts(app);

app.mount("#app");
