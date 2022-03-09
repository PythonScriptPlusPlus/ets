import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import 'normalize.css';
import router from './router';
import store from './store';
//component
import DesktopHeader from './components/DesktopHeader.vue';
import CustomFooter from './components/CustomFooter.vue';
import CategoryPopUp from './components/CategoryPopUp.vue';
import Geography from './components/subjects/Geography.vue';
import InfoT from './components/subjects/IT.vue';
import Mathe from './components/subjects/Math.vue';

Vue.config.productionTip = false;

Vue.component('DesktopHeader',DesktopHeader);
Vue.component('CustomFooter',CustomFooter);
Vue.component('CategoryPopUp',CategoryPopUp);
Vue.component('Geography',Geography);
Vue.component('InfoT',InfoT);
Vue.component('Mathe',Mathe);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
