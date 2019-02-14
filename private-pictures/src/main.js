import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
