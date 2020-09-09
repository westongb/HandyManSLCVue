import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
// import { uriBase } from "../const";
import Services from "../components/Services.vue";
import MeetBrett from "../components/Brett.vue";
import GetQuote from "../components/GetQuotePage.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Services",
    name: "Services",
  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Services
  },
  {
    path: "/meetBrett",
    name: "MeetBrett",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MeetBrett
  },
  {
    path: "/quote",
    name: "Get Quote",
    component: GetQuote
  }
];

const router = new VueRouter({
  // base: '/dev', // for dev
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;