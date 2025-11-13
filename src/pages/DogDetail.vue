<template>
  <q-page>
    <div class="tw-h-full">
      <DogForm v-model="dog" @dog-emited="handleSave" />
    </div>
  </q-page>
</template>
<script setup>
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
import DogForm from "../components/DogForm.vue";
import { useHeader } from "../stores/header";

const route = useRoute();
const headerStore = useHeader();

const dog = defineModel({
  type: Object,
  default: () => ({
    name: "",
    age: "",
    birthday: "",
    gender: "M",
    size: "",
    breed: "",
    instagram: "",
    owner: "",
    health: {
      has_vet: false,
      vet_name: "",
      vet_phone: "",
      castrated: false,
      in_heat: false,
      chronic_disease: false,
      disease_description: "",
      allergies: "",
      special_recommendations: "",
    },
  }),
});

const handleSave = (event) => {
  console.log(event);
};

onBeforeMount(() => {
  headerStore.title = "Cachorrinho detail";
});
</script>
