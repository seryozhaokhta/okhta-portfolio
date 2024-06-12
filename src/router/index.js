// router/index.js

import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage.vue";
import WebDevPage from "../components/1_webDev.vue";
import EnvisioningInfPage from "../components/2_envisioningInf.vue";
import CgiPage from "../components/3_cgiPage.vue";
import EducationalVideosPage from "../components/4_educationalVideos.vue";
import AppDraftsPage from "../components/5_appDrafts.vue";
import AboutMePage from "../components/6_aboutMe.vue";

const routes = [
  { path: "/", name: "home", component: MainPage },
  {
    path: "/web-development",
    name: "website_development",
    component: WebDevPage,
  },
  {
    path: "/envisioning-information",
    name: "envisioning_information",
    component: EnvisioningInfPage,
  },
  { path: "/cgi", name: "cgi", component: CgiPage },
  {
    path: "/educational-videos",
    name: "educational_videos",
    component: EducationalVideosPage,
  },
  {
    path: "/app-drafts",
    name: "app_drafts",
    component: AppDraftsPage,
  },
  {
    path: "/about-me",
    name: "about_me",
    component: AboutMePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
