<template>
  <q-form @submit.prevent="saveDog()" class="tw-h-full">
    <q-scroll-area class="tw-h-full tw-w-full">
      <div class="text-h6 q-mb-sm">Dados do Cachorro</div>
      <div class="tw-grid tw-grid-cols-3 tw-gap-3">
        <q-input
          v-model="dog.name"
          label="Nome"
          dense
          rounded
          outlined
          :rules="[(val) => !!val || 'Campo Obrigatório']"
        />
        <q-input v-model="dog.age" label="Idade" dense rounded outlined />
        <q-input
          v-model="dog.birthday"
          label="Data de Nascimento"
          type="date"
          dense
          rounded
          outlined
        />
        <q-select
          v-model="dog.gender"
          :options="genders"
          label="Gênero"
          dense
          rounded
          outlined
          map-options
          emit-value
          :rules="[(val) => !!val || 'Campo Obrigatório']"
        />
        <q-select
          v-model="dog.size"
          :options="sizes"
          label="Porte"
          dense
          rounded
          outlined
          map-options
          emit-value
          :rules="[(val) => !!val || 'Campo Obrigatório']"
        />
        <q-input
          v-model="dog.breed"
          label="Raça"
          dense
          rounded
          outlined
          :rules="[(val) => !!val || 'Campo Obrigatório']"
        />
        <q-input
          v-model="dog.instagram"
          label="Instagram"
          dense
          rounded
          outlined
        />
      </div>
      <q-separator spaced />
      <div class="tw-flex tw-flex-col">Tutor</div>
      <q-separator spaced />
      <div class="text-h6 q-mb-sm">Saúde</div>
      <div class="tw-flex tw-flex-col">
        <q-toggle v-model="dog.health.chronic_disease" label="Possui doença?" />
        <q-input
          v-if="dog.health.chronic_disease"
          v-model="dog.health.disease_description"
          label="Descrição da doença"
          outlined
          dense
          rounded
          :rules="[(val) => !!val || 'Necessário Descrição']"
        />
        <q-toggle v-model="dog.health.allergies" label="Possui alergias?" />
        <q-input
          v-if="dog.health.allergies"
          v-model="dog.health.allergies"
          label="Descrição das alergias"
          outlined
          dense
          rounded
          :rules="[(val) => !!val || 'Necessário Descrição']"
        />
        <q-toggle v-model="dog.health.has_vet" label="Possui Veterinário?" />

        <q-input
          v-if="dog.health.has_vet"
          v-model="dog.health.vet_name"
          label="Nome do Veterinário"
          outlined
          dense
          rounded
          :rules="[(val) => !!val || 'Campo Obrigatório']"
        />
        <q-input
          v-if="dog.health.has_vet"
          v-model="dog.health.vet_phone"
          label="Telefone do Veterinário"
          outlined
          dense
          rounded
          :rules="[(val) => !!val || 'Campo Obrigatório']"
        />
        <q-toggle v-model="dog.health.castrated" label="Castrado" />
        <q-toggle v-model="dog.health.in_heat" label="No cio" />
      </div>
    </q-scroll-area>
    <div class="tw-w-full tw-flex tw-justify-end">
      <q-btn type="submit" label="Salvar" color="primary" class="" rounded />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { Health } from "../types/health";

const emits = defineEmits(["dogEmited"]);

interface Dog {
  name: string;
  age: string;
  birthday: string;
  gender: string;
  size: string;
  breed: string;
  instagram: string;
  owner: string;
  health: Health;
}

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

const sizes = [
  {
    label: "Pequeno",
    value: "P",
  },
  {
    label: "Médio",
    value: "M",
  },
  {
    label: "Grande",
    value: "G",
  },
];

const genders = [
  {
    label: "Macho",
    value: "M",
  },
  {
    label: "Fêmea",
    value: "F",
  },
];

const saveDog = () => {
  emits("dogEmited", { ...dog.value });
};
</script>
