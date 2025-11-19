<template>
  <q-page>
    <div class="tw-h-full">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="details" label="Cadastro" />
        <q-tab name="services" label="Serviços" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="details">
          <DogForm v-model="dog" @dog-emited="handleSave" />
        </q-tab-panel>
        <q-tab-panel name="services">
          <div class="tw-h-6">serviços</div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>
<script setup>
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
import DogForm from "../components/DogForm.vue";
import { useHeader } from "../stores/header";
import { useDogs } from "../stores/dogs";

const tab = ref("details");

const route = useRoute();

const headerStore = useHeader();
const dogStore = useDogs();

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

onBeforeMount(async () => {
  headerStore.title = "Cachorrinho detail";
  if (route.params.id) {
    await dogStore.getDog(route.params.id);
  }
});
</script>
