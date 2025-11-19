<template>
  <q-page>
    <div class="q-pa-md tw-border tw-h-full tw-pb-16">
      <DogForm v-model="dog" @dog-emited="handleSave" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import DogForm from "../components/DogForm.vue";
import { Dog } from "../types/index";

const dog = ref<Dog>({
  name: "",
  age: 0,
  birth_date: "",
  gender: "M",
  size: "P",
  breed: "",
  instagram: "",
  health: {
    has_vet: false,
    vet_name: "",
    vet_phone: "",
    castrated: true,
    in_heat: false,
    chronic_disease: false,
    allergies: "",
    disease_description: "",
    special_recommendations: "",
  },
  owner: {
    name: "",
    phone: "",
    cpf: "",
    email: "",
    address: "",
    district: "",
  },
  is_active: true,
});

const handleSave = (dog: Dog) => {
  console.log(dog);
};

onBeforeMount(() => {});
</script>
