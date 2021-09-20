import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import 'normalize.css';
import router from './router';
import store from './store';
//component
import DesktopHeader from './components/DesktopHeader.vue';

Vue.config.productionTip = false;

Vue.component('DesktopHeader',DesktopHeader);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
