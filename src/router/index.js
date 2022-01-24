import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'MainPage',
		component: MainPage,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
