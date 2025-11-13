<template>
  <q-page>
    <div class="tw-h-full">
      <table-component
        :columns="columns"
        :rows="dogsRow"
        @handle-actions="handleActions"
        custom-class="tw-h-full tw-rounded-xl"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref, onBeforeMount, onBeforeUnmount, nextTick } from "vue";
import { useRouter } from "vue-router";
import TableComponent from "../components/TableComponent.vue";
import { useHeader } from "../stores/header.ts";
import { useDogs } from "../stores/dogs";

const router = useRouter();
const headerStore = useHeader();
const dogStore = useDogs();

const columns = ref([
  {
    name: "name",
    label: "Nome",
    field: "name",
    align: "left",
  },
  {
    name: "gender",
    label: "Sexo",
    field: "gender",
    align: "left",
    format: (val) => (val === "M" ? "Macho" : "Fêmea"),
  },
  {
    name: "breed",
    label: "Raça",
    field: "breed",
    align: "left",
  },
  {
    name: "size",
    label: "Porte",
    field: "size",
    format: (val) =>
      val === "P" ? "Pequeno" : val === "M" ? "Médio" : "Grande",
    align: "left",
  },
  {
    name: "owner",
    label: "Tutor",
    field: "owner_name",
  },
  {
    name: "isActive",
    label: "Situação",
    field: "is_active",
    format: (val) => (val === true ? "Ativo" : "Inátivo"),
  },
  {
    name: "actions",
    label: "",
    field: "",
  },
]);

const dogsRow = ref();

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

onBeforeMount(async () => {
  dogsRow.value = await dogStore.getAllDogs();
  headerStore.$reset();
  nextTick(() => {
    headerStore.action = headerActions;
  });
});

onBeforeUnmount(() => {
  headerStore.$reset();
});
</script>
