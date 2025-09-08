<template>
  <q-layout class="layout">
    <q-page-container class="page tw-bg-[#f7f7f7]">
      <Topbar />
      <Sidebar />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Topbar from "../components/layout/TopbarLayout.vue";
import Sidebar from "../components/layout/SidebarLayout.vue";

defineOptions({
  name: "MainLayout",
});
</script>
