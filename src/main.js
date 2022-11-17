import { createApp  } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/styleModal.css";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/src/jquery.js'
import Popper from "vue3-popper"; 
import 'vue3-popper/dist/popper.min.js'
import 'vue3-popper/dist/popper.esm'
import 'vue3-popper/dist/popper.ssr'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap" 
import Toaster from "@meforma/vue-toaster";
import VueCookies from 'vue-cookies'
import VuePapaParse from 'vue-papa-parse';
// import fs from 'fs'; 
 import tinymce from 'vue-tinymce-editor'
const appInstance = createApp(App).use(router).use(store).use(VuePapaParse).use(Popper);
   import 'vue-phone-number-input/dist/vue-phone-number-input.css';
appInstance.use(Popper); 
appInstance.use(require('vue-cookies'))
 appInstance.use(VueCookies, { expire: '7d'})
appInstance.use(store);  
appInstance.component('tinymce', tinymce)
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.use(VuePapaParse)
appInstance.use(Toaster)

appInstance.mount("#app");
