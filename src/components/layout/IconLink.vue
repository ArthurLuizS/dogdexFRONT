<template>
  <RouterLink
    :to="link"
    :class="route.fullPath === link ? 'active' : 'inactive'"
    class="flex content-center"
    style="height: 40px; gap: 8px; width: 280px"
  >
    <q-item clickable class="rounded-r-full item full-width">
      <q-item-section
        v-if="icon"
        avatar
        style="display: flex; align-items: center"
      >
        <q-icon
          class="align-self-right"
          size="xs"
          :name="icon"
          :class="route.fullPath === link ? 'text-primary' : 'icon--inactive'"
        />
      </q-item-section>

      <q-item-section class="label-container">
        <q-item-label class="label" style="font-size: 0.8rem">
          {{ title }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </RouterLink>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
export interface EssentialLinkProps {
  title: string;
  link?: string;
  icon?: string;
  state?: string;
}

withDefaults(defineProps<EssentialLinkProps>(), {
  link: "",
  icon: "",
});
</script>
<style scoped lang="scss">
.icon--active {
  color: $primary;
}

.inactive {
  color: $c8;
}

.icon--inactive {
  color: $c8;
}

.medium,
.large {
  .label-container {
    display: inline-flex;
  }

  .label {
    white-space: nowrap;
    .body--dark & {
      color: $c1;
    }
    .body--light & {
      color: $c8;
    }
  }
}
</style>
