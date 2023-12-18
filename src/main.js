// import App from "./App.vue";
// import router from "./router";

//import { CHECK_AUTH } from "./store/actions.type";
import ApiService from "./common/api.service";
// import DateFilter from "./common/date.filter";
// import ErrorFilter from "./common/error.filter";

// Vue.config.productionTip = false;
// Vue.filter("date", DateFilter);
// Vue.filter("error", ErrorFilter);

// new Vue({
//   router,
//   store,
//   render: (h) => h(App)
// }).$mount("#app");

import Vue, { createApp } from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { createVuetify } from "vuetify";
import router from "./router";
import store from "./store";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "./registerServiceWorker";

import App from "./App.vue";
ApiService.init();

// Ensure we checked auth before each page load.
// router.beforeEach((to, from, next) =>
//   // Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
// );
const app = createApp(App);
app.use(store);
const vuetify = createVuetify({
  components,
  directives
});

app.use(vuetify);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
app.use(router);

app.mount("#app");
