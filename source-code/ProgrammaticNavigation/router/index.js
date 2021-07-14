import { createRouter, createWebHistory } from "vue-router";

import NestedRoutes from "@/components/NestedRoutes.vue";
import NestedProfile from "@/components/nested/NestedProfile.vue";
import NestedPost from "@/components/nested/NestedPost.vue";
import Detail from "@/components/nested/Detail.vue";

import DynamicRoute from "@/components/DynamicRoute.vue";
import User from "@/components/user/User.vue";
import UserName from "@/components/user/UserName.vue";
import UserAge from "@/components/user/UserAge.vue";

import ProgrammaticNavigation from "@/components/ProgrammaticNavigation.vue";
import StringRouter from "@/components/navigation/StringRouter.vue";
import ObjectRouter from "@/components/navigation/ObjectRouter.vue";
import NamedRouter from "@/components/navigation/NamedRouter.vue";
import WithQuery from "@/components/navigation/WithQuery.vue";
import RouterReplace from "@/components/navigation/RouterReplace.vue";
const routes = [
  {
    path: "/",
    name: "Nestedroutes",
    component: NestedRoutes,
    children: [
      {
        path: "nestedprofile",
        name: "NestedProfile",
        component: NestedProfile,
        children: [
          {
            path: "detail",
            name: "Detail",
            component: Detail,
          },
        ],
      },
      {
        path: "nestedpost",
        name: "NestedPost",
        component: NestedPost,
      },
    ],
  },

  {
    path: "/dr",
    component: DynamicRoute,
    children: [
      {
        path: "/dr/user/:id",
        component: User,
        children: [
          {
            path: "name",
            component: UserName,
          },
          {
            path: "age",
            component: UserAge,
          },
        ],
      },
    ],
  },

  {
    path: "/pn",
    component: ProgrammaticNavigation,
    children: [
      {
        path: "stringrouter",
        component: StringRouter,
      },
      {
        path: "objectrouter",
        component: ObjectRouter,
      },
      {
        path: "namedroute/:data",
        name: "NamedRouter",
        component: NamedRouter,
      },
      {
        path: "withquery",
        name: "withquery",
        component: WithQuery,
      },
      {
        path: "routerreplace",
        name: "routerreplace",
        component: RouterReplace,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
