import Vue from "vue";
import "../plugins/vuetify";
import App from "./App.vue";
import "../registerServiceWorker";
const load = () => {
  console.log("load event detected!");
  if (window.matchMedia("(display-mode: standalone)").matches) {
    console.log("display-mode is standalone");
    window.resizeTo(400, 600);
  }
};
window.onload = load;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
