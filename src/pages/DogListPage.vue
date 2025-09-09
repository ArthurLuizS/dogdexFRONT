<template>
  <q-page>
    <div class="">
      <table-component
        :columns="columns"
        :rows="dogsRow"
        @handle-actions="handleActions"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import TableComponent from "../components/TableComponent.vue";

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
</script>
