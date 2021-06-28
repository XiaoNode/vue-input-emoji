import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import { Popover, Input, Icon } from "ant-design-vue";

Vue.use(Popover);
Vue.use(Icon);
Vue.use(Input);

import "ant-design-vue/dist/antd.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
