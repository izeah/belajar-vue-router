import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserDetailView from "../views/UserDetailView.vue";
import UsersView from "../views/UsersView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("../views/ProfileView.vue"),
    },
    {
        path: "/users",
        name: "users",
        component: UsersView,
        children: [
            {
                path: ":id",
                name: "userDetail",
                components: { helper: UserDetailView },
            },
        ],
    },
];

const router = createRouter({
    scrollBehavior() {
        // always scroll to top
        return { top: 0 };
    },
    history: createWebHistory(),
    routes,
});

export default router;
