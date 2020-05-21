import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Raven from "raven-js";
// import RavenVue from "raven-js/plugins/vue";
// Vue.config.productionTip = false
// Sentry.init({
//   release: 'njmap',
//   dsn: 'http://fba6b267ebc74c86b212b93aec3431ea@47.97.125.162:9000/5',
//   integrations: [new Integrations.Vue({ Vue, attachProps: true, logErrors: true })]
// })

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
