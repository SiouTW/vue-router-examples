import { createRouter, createWebHistory } from "vue-router";

import NestedRoutes from "@/components/NestedRoutes.vue";
import NestedProfile from "@/components/nested/NestedProfile.vue";
import NestedPost from "@/components/nested/NestedPost.vue";
import Detail from "@/components/nested/Detail.vue";

import DynamicRoute from "@/components/DynamicRoute.vue";
import User from "@/components/user/User.vue";
import UserName from "@/components/user/UserName.vue";
import UserAge from "@/components/user/UserAge.vue";
const routes = [
  {
    path: "/",
    name: "Nestedroutes",
    component: NestedRoutes,
    children: [
      {
        path: "/nestedprofile",
        name: "NestedProfile",
        component: NestedProfile,
        children: [
          {
            path: "/nestedprofile/detail",
            name: "Detail",
            component: Detail,
          },
        ],
      },
      {
        path: "/nestedpost",
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
