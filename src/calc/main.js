import Vue from "vue";
import "../plugins/vuetify";
import App from "./App.vue";
import "../registerServiceWorker";
const load = () => {
  console.log("load event detected!");
};
window.onload = load;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
