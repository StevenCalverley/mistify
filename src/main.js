import Vue from 'vue';
import App from './App.vue';
import Mistify from './mistify';

import './assets/tailwind.css';

Vue.config.productionTip = false;

Vue.use(Mistify);

new Vue({
  render: h => h(App),
}).$mount('#app');
