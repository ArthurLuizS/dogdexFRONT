<template>
  <div
    :class="customClass ?? 'q-pa-md rounded-xl box-shadow column'"
    :style="customStyle"
  >
    <header class="row">
      <slot name="headerLeft">
        <strong class="text-primary text-h6">{{ title }}</strong>
      </slot>
      <q-space />
      <slot name="headerCenter" />
      <!-- <q-space  /> -->
      <slot name="headerRight" />
    </header>
    <q-separator
      v-if="title != null || separator === true"
      color="c6"
      style="height: 2px"
      class="rounded-full"
    />
    <main v-if="loadingBody !== true" class="q-pt-sm col">
      <slot />
    </main>
    <q-skeleton v-else class="q-mt-sm col" />
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  customClass?: string;
  customStyle?: string;
  title?: string; // Não só o título quanto a linha depende da existência dessa variável
  separator?: boolean;
  loadingBody?: boolean;
}

defineProps<CardProps>();
</script>

<style>
.q-skeleton {
  min-width: 40vw;
}
</style>
