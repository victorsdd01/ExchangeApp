import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: () => import("@/views/CoinDetail.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "*",
      name: "error",
      component: () => import("@/views/Error.vue"),
    },
  ],
});
