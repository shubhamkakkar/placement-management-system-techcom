import Vue from "vue";
import Router from "vue-router";

import vHeader from "@/components/Header.vue";
import errorPage from "@/components/errorPage.vue";
import Dashboard from "../src/components/managementSystem/AuthenticatedUser/Dashboard.vue";
import Preview from "@/components/managementSystem/AuthenticatedUser/userDataSent/preview.vue";
import EditMenu from "@/components/managementSystem/AuthenticatedUser/userDataSent/edit-menu.vue";

import EdVCard from './pages/educationForm'
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "header",
      component: vHeader
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/preview",
      name: "preview",
      component: Preview
    },
    {
      path: "/edit-menu",
      name: "edit-menu",
      component: EditMenu
    },
    {
      path: "/ed-v-card",
      name: "/ed-v-card",
      component: EdVCard
    },
    {
      path: "/404",
      name: "404",
      component: errorPage
    },
    {
      path: "*",
      redirect: "/404"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
