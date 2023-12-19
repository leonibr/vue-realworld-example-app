// import { CHECK_AUTH } from "./store/actions.type";
import ApiService from "./common/api.service";

import Vue, { createApp } from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { createVuetify } from "vuetify";
import router from "./router";
import store from "./store";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { configureCompat } from "@vue/compat";

import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";
import useTheme from "./theme/use-theme";

ApiService.init();
const { mode } = useTheme();

// Ensure we checked auth before each page load.
router.beforeEach(() => {
  // Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
  configureCompat({
    MODE: mode,
    GLOBAL_EXTEND: true,
    INSTANCE_LISTENERS: true
  });
});
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
