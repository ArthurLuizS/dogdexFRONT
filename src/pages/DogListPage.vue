<template>
  <q-page>
    <div class="">
      <div>Tabela de caes</div>
      <table-component :columns="colunas" :rows="linhas" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import TableComponent from "../components/TableComponent.vue";

const colunas = ref([
  {
    name: "index",
    label: "#teste",
    field: "name",
  },
  {
    name: "inddex",
    label: "#teste2",
    field: "iron",
  },
]);

const linhas = ref([
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
]);
</script>
