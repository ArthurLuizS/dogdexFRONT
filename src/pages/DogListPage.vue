<template>
  <q-page>
    <div class="tw-h-full tw-rounded-xl tw-bg-white">
      <table-component
        :columns="columns"
        :rows="dogsRow"
        @handle-actions="handleActions"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref, onBeforeMount, onBeforeUnmount, nextTick } from "vue";
import { useRouter } from "vue-router";
import TableComponent from "../components/TableComponent.vue";
import { useHeader } from "../stores/header.ts";

const router = useRouter();
const headerStore = useHeader();

const columns = ref([
  {
    name: "name",
    label: "Nome",
    field: "name",
  },
  {
    name: "gender",
    label: "Sexo",
    field: "gender",
  },
  {
    name: "breed",
    label: "Raça",
    field: "breed",
  },
  {
    name: "owner",
    label: "Tutor",
    field: "owner",
  },
  {
    name: "actions",
    label: "",
    field: "",
  },
]);

const dogsRow = ref([
  {
    name: "Laila",
    gender: "Fêmea",
    breed: "Beagle",
    owner: "Leticia",
  },
  {
    name: "Joplin",
    gender: "Fêmea",
    breed: "Buldog",
    owner: "Leticia",
  },
]);

const handleActions = (row) => {
  console.log(row);
};

const newDog = () => {
  router.push("/novohospede");
  console.log("funcao new dog");
};

const headerActions = {
  function: newDog,
  icon: "add_circle_outline",
  label: "Novo Hóspede",
};

onBeforeMount(() => {
  headerStore.$reset();
  nextTick(() => {
    headerStore.action = headerActions;
  });
});

onBeforeUnmount(() => {
  headerStore.$reset();
});
</script>
