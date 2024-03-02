import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import English from "../views/English.vue";
import Portuguese from "../views/Portuguese.vue";
import Espanish from "../views/Espanish.vue";
import ChildComponent from "../components/ChildComponent.vue";
import SobrePtComponent from "../components/SobrePtComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/en",
    name: "en",
    component: English,
  },
  {
    path: "/pt",
    name: "pt",
    component: Portuguese,
    children: [
      {
        path: "/pt/sobre",
        name: "pt",
        component: SobrePtComponent,
      },
      {
        path: "/pt/blog",
        name: "blog",
        component: ChildComponent,
      },
    ],
  },
  {
    path: "/es",
    name: "es",
    component: Espanish,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;