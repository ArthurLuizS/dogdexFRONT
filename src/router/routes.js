const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    meta: { title: "Lista de Cães" },
    path: "/caes",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/DogListPage.vue") }],
  },
  {
    meta: { title: "Cadastro de Hóspedes" },
    path: "/novohospede",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/DogRegistration.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
