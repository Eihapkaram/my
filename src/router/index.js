import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelpView from "../views/HelpView.vue";
import AboutView from "../views/AboutView.vue";
import NotFound from "@/views/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
    meta: {
      title: "About",
    },
  },
  {
    path: "/HelpView",
    name: "HelpView",
    component: HelpView,
    meta: {
      title: "Halp",
    },
  },
  {
    name: "NotFound",
    path: "/:pathmatch(.*)*",
    component: NotFound,
    meta: {},
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
