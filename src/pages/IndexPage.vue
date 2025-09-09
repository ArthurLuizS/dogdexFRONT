<template>
  <q-page class="flex flex-center">
    <q-icon name="pets" size="lg" />
    <q-icon name="pets" size="lg" />
    <q-icon name="pets" size="lg" />
    <q-icon name="pets" size="lg" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "IndexPage",
});

const testTs = ref<number>(0);
</script>
