<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "IndexPage",
});

const testTs = ref<number>(0);
</script>
