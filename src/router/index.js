import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage.vue';
import About from '../views/About.vue';
import Page404 from '../views/Page404.vue';
import Category from '../views/Category.vue';
import VideoTemp from '../views/Video.vue';
import AddVid from '../views/Add.vue';

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
	{
		path: '/category/:category',
		name: 'Category',
		component: Category,
	},
	{
		path: '/category/:category/:vid',
		name: 'VideoTemp',
		component: VideoTemp,
	},
	{
		path: '/add_video',
		name: 'AddVid',
		component: AddVid,
	},
	{
		path: '/:catchAll(.*)',
		name: 'Page404',
		component: Page404
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
