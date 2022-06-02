import { createWebHistory, createRouter } from "vue-router";
import Compteur from "@/components/Compteur.vue";
import DemoJWT from "@/components/DemoJWT.vue";
import Tableau from "@/components/Tableau.vue";
import Connexion from "@/components/Connexion.vue";
import FormBootstrap from "@/components/FormBootstrap.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Compteur",
      component: Compteur,
    },
    {
      path: "/jwt",
      name: "DemoJWT",
      component: DemoJWT,
    },
    {
      path: "/tableau",
      name: "Tableau",
      component: Tableau,
    },
    {
      path: "/connexion",
      name: "Connexion",
      component: Connexion,
    },
    {
      path: "/bootstrap",
      name: "FormBootstrap",
      component: FormBootstrap,
    },
  ],
});

export default router;
