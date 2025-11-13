<template>
  <div class="topbar__container">
    <header class="topbar bg-accent box-shadow">
      <q-icon
        color="primary"
        name="arrow_back"
        size="sm"
        @click="goBack"
        v-if="route.fullPath !== '/'"
        style="cursor: pointer"
      />

      <img v-else src="img.png" style="height: 16px" />

      <div class="separator" />
      <span class="text-primary text-weight-medium" v-if="route.meta.title">
        {{ route.meta.title }}
      </span>

      <span v-else class="text-primary text-weight-medium">
        {{ headerStore.title }}
      </span>

      <q-space />
      <q-btn
        class="full-height"
        rounded
        v-if="headerStore.action != null"
        :label="headerStore.action?.label"
        :icon-right="headerStore.action?.icon"
        @click="headerStore.action?.function()"
        color="primary"
        unelevated
      />
    </header>
    <!-- TODO: transformar em um avatar  -->
    <q-btn
      label="DD"
      rounded
      style="
        width: 40px;
        height: 40px;
        background-color: #a5bdf9;
        color: #ffffff;
      "
    >
      <q-menu
        :autoClose="true"
        style="background: transparent; box-shadow: none; border-radius: 24px"
        anchor="top left"
        class="menu poppins--regular"
        self="top right"
        :offset="[-40, -40]"
      >
        <div class="menu-container column">
          <div style="width: 150px; height: 50px" class="flex flex-row">
            <q-btn
              class="bg-accent relative items-center text-primary full-width"
              flat
              rounded
              @click="confirm"
            >
              <q-icon size="xs" name="logout" />
              <strong>Sair</strong>
            </q-btn>
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import { useHeader } from "../../stores/header";

const route = useRoute();
const router = useRouter();

const $q = useQuasar();

const headerStore = useHeader();

const goBack = () => {
  router.go(-1);
};

const confirm = () => {
  $q.dialog({
    title: "Confirmar",
    message: "Deseja Sair?",
    cancel: true,
    persistent: false,
  })
    .onOk(() => {
      router.push("/logout");
    })
    .onOk(() => {
      // console.log('>>>> second OK catcher')
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
};
</script>
<style lang="scss">
.topbar__container {
  z-index: 1;
  position: absolute;
  top: 0;
  left: $sidebar-width--colapsed;
  right: 0;
  height: $topbar-size;
  padding: 16px;
  display: flex;
  gap: 16px;

  .topbar {
    height: 100%;
    border-radius: 99999px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 16px;

    .separator {
      height: 32px;
      margin: 0 12px;
      width: 2px;
      background: $c2;
      border-radius: 99999px;
    }
  }

  .search {
    width: 280px;
    height: 100%;
    border-radius: 99999px;
  }
}
</style>
