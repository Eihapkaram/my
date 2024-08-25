import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import jQuery from "jquery";
import "../node_modules/jquery/dist/jquery.js";
window.jQuery = jQuery;
AOS.init();
createApp(App).use(store).use(router).mount("#app");
