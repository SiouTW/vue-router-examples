import { createRouter, createWebHistory } from "vue-router";

import NestedRoutes from "@/components/NestedRoutes.vue";
import NestedProfile from "@/components/nested/NestedProfile.vue";
import NestedPost from "@/components/nested/NestedPost.vue";

import Detail from "@/components/nested/Detail.vue";
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
