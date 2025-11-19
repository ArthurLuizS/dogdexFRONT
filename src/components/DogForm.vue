<template>
  <q-form @submit.prevent="saveDog()" class="tw-h-full">
    <q-scroll-area class="tw-h-full tw-w-full">
      <div class="q-mb-sm">
        <span class="text-h6"> Dados do Cachorro </span>
        <q-icon
          :name="expand.dog ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          class="tw-cursor-pointer"
          size="sm"
          @click="
            {
              if (route.params.id) expand.dog = !expand.dog;
            }
          "
        />
      </div>
      <div
        class="tw-grid tw-grid-cols-3 tw-gap-3"
        :class="expand.dog ? '' : 'tw-hidden'"
      >
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
          v-model="dog.birth_date"
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

      <div>
        <span class="text-h6"> Tutor </span>
        <q-icon
          :name="expand.dog ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          class="tw-cursor-pointer"
          size="sm"
          @click="
            {
              if (route.params.id) expand.owner = !expand.owner;
            }
          "
        />
      </div>
      <div
        class="tw-grid tw-grid-cols-3 tw-gap-3"
        :class="expand.owner ? '' : 'tw-hidden'"
      >
        <q-input
          v-model="dog.owner.name"
          label="Nome"
          dense
          rounded
          outlined
          :rules="[(val) => !!val || 'Campo Obrigatório']"
        />

        <q-input
          v-model="dog.owner.phone"
          label="WhatsApp"
          dense
          rounded
          outlined
          :rules="[(val) => !!val || 'Campo Obrigatório']"
          mask="(##) #####-####"
        />

        <q-input
          v-model="dog.owner.cpf"
          label="CPF"
          dense
          rounded
          outlined
          :rules="[(val) => !!val || 'Campo Obrigatório']"
        />

        <q-input
          v-model="dog.owner.email"
          label="email"
          dense
          rounded
          outlined
          :rules="[(val) => !!val || 'Campo Obrigatório']"
        />

        <q-input
          v-model="dog.owner.address"
          label="Endereço"
          dense
          rounded
          outlined
        />

        <q-input
          v-model="dog.owner.district"
          label="Bairro"
          dense
          rounded
          outlined
        />
      </div>

      <q-separator spaced />
      <div class="text-h6 q-mb-sm">Saúde</div>
      <div class="tw-flex tw-flex-col">
        <div>
          <q-toggle v-model="dog.health.castrated" label="Castrado" />
          <q-toggle v-model="dog.health.in_heat" label="No cio" />
          <q-toggle v-model="dog.health.has_vet" label="Possui Veterinário?" />
          <q-toggle
            v-model="dog.health.chronic_disease"
            label="Doença/Alergias?"
          />
        </div>
        <div class="tw-grid tw-grid-cols-3 tw-gap-3">
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
        </div>
        <div>
          <q-input
            v-if="dog.health.chronic_disease"
            v-model="dog.health.disease_description"
            label="Descrição da doença"
            outlined
            dense
            rounded
            :rules="[(val) => !!val || 'Necessário Descrição']"
          />
          <q-input
            v-if="dog.health.chronic_disease"
            v-model="dog.health.allergies"
            label="Descrição das alergias"
            outlined
            dense
            rounded
            :rules="[(val) => !!val || 'Necessário Descrição']"
          />
        </div>
      </div>
    </q-scroll-area>
    <div class="tw-w-full tw-flex tw-justify-end">
      <q-btn type="submit" label="Salvar" color="primary" class="" rounded />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { Dog } from "../types/index";
import { useRoute } from "vue-router";

const route = useRoute();

const emits = defineEmits(["dogEmited"]);

const dog = defineModel<Dog>({
  default: () => ({
    name: "",
    age: "",
    birth_date: "",
    gender: "M",
    size: "",
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

const expand = ref({
  dog: true,
  owner: true,
  health: true,
});

const saveDog = () => {
  emits("dogEmited", { ...dog.value });
};
</script>
