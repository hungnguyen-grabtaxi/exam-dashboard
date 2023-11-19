import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("@/pages/index.vue"),
    meta: {
      layout: "Default",
      menu: "dashboard",
    },
  },
  {
    path: "/automations",
    name: "Automation",
    component: () => import("@/pages/automations/index.vue"),
    meta: {
      layout: "Default",
      menu: "automations",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/pages/NotFound.vue"),
  },
];

const history = createWebHistory("/");
const router = createRouter({
  history,
  routes,
});

router.beforeEach(async () => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export { history, router };
