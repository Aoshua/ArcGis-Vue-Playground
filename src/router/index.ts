import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/basic-2d',
			name: 'Basic2D',
			component: () => import('../views/Basic2DView.vue'),
		},
	],
})

export default router
