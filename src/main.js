import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import createRouter from "./router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
let router = createRouter();

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

router.afterEach(() => {
  // chrome
  document.body.scrollTop = 0;
  // firefox
  document.documentElement.scrollTop = 0;
  // safari
  window.pageYOffset = 0;
});
