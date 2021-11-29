import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";
import WatchTV from "../components/StartWatchTV.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import("../views/About.vue"),
    },
    {
        path: "/watchTV",
        name: "WatchTV",
        component: WatchTV
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
