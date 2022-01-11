import Vue from "vue";

import App from "./App.vue";
import router from "./router";
/* import store from "./store"; */

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
