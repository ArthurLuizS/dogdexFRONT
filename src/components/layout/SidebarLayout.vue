<template>
  <div class="drawer bg-accent box-shadow q-my-md">
    <RouterLink class="link" to="/">
      <img class="logo" src="/logo.svg" />
    </RouterLink>
    <nav class="full-height flex column" style="gap: 5px">
      <Iconlink link="/caes" icon="pets" title="Lista de Cães" />
    </nav>
  </div>
</template>

<script setup lang="ts">
import Iconlink from "./IconLayout.vue";
</script>

<style scoped lang="scss">
.drawer {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: $sidebar-width--colapsed;
  transition: width $animation-time ease-in-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0px 24px 24px 0px;

  &:hover {
    width: $sidebar-width--expanded;
  }

  .link {
    text-align: center;
    padding: 16px 8px 0px 8px;
    margin-bottom: 36px;
    .logo {
      width: 56px;
    }
  }
}
</style>
