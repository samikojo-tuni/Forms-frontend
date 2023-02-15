import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from '../components/Login.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/employees",
			name: "employees",
			component: () => import("../views/EmployeeView.vue"),
		},
		{
			path: "/login",
			name: "Login",
			component: Login
		},
		{
			path: "/profile",
			name: "Profile",
			component: () => import('../components/Profile.vue'),
		}
	],
});

export default router;
