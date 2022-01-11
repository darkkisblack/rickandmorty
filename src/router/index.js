import Vue from "vue";
import Router from "vue-router";
import MainPage from "../components/MainPage.vue";
import Episodes from "../components/Episodes.vue";
import EpisodeDetail from "../components/EpisodeDetail.vue";
import Heroes from "../components/Heroes.vue";
import HeroesDetail from "../components/HeroesDetail.vue";
import Location from "../components/Location.vue";
import LocationDetail from "../components/LocationDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },
    {
      path: "/Episodes",
      name: "Episodes",
      component: Episodes,
    },
    {
      path: "/episode/:id",
      name: "EpisodeDetail",
      component: EpisodeDetail,
    },
    {
      path: "/Heroes",
      name: "Heroes",
      component: Heroes,
    },
    {
      path: "/character/:id",
      name: "HeroesDetail",
      component: HeroesDetail,
    },

    {
      path: "/Location",
      name: "Location",
      component: Location,
    },
    {
      path: "/location/:id",
      name: "LocationDetail",
      component: LocationDetail,
    },
  ],
});
