import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/home/index.vue";

const routes = [{ path: "/", name: "Home", component: Home }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
