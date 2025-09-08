<template>
  <div>
    <RouterLink class="link" to="/">
      <img class="logo" src="/logo.svg" />
    </RouterLink>
    <nav class="full-height flex column" style="gap: 5px">
      <IconLink link="/dogs" icon="place" title="Lista de Cães" />
    </nav>
  </div>
</template>

<script setup lang="ts">
// import IconLink from "./IconLink.vue";
</script>
