<template>
  <q-page>
    <div class="q-pa-md tw-border tw-h-full">
      <q-form @submit="() => console.log(dog)" class="tw-h-full">
        <q-scroll-area class="tw-h-full tw-w-full">
          <div class="text-h6 q-mb-sm">Dados do Cachorro</div>
          <div class="tw-grid tw-grid-cols-3 tw-gap-3">
            <q-input v-model="dog.name" label="Nome" dense rounded outlined />
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
            />
            <q-select
              v-model="dog.size"
              :options="sizes"
              label="Tamanho"
              dense
              rounded
              outlined
            />
            <q-input v-model="dog.breed" label="Raça" dense rounded outlined />
            <q-input
              v-model="dog.instagram"
              label="Instagram"
              dense
              rounded
              outlined
            />
          </div>

          <q-separator spaced />
          <div class="text-h6 q-mb-sm">Dono</div>
          <div class="tw-grid tw-grid-cols-3 tw-gap-3">
            <q-input
              v-model="dog.owner.name"
              label="Nome"
              outlined
              dense
              rounded
            />
            <q-input
              v-model="dog.owner.addres"
              label="Endereço"
              outlined
              dense
              rounded
            />
            <q-input
              v-model="dog.owner.district"
              label="Bairro"
              outlined
              dense
              rounded
            />
            <q-input
              v-model="dog.owner.cpf"
              label="CPF"
              outlined
              dense
              rounded
            />
            <q-input
              v-model="dog.owner.phone"
              label="Telefone"
              outlined
              dense
              rounded
            />
          </div>

          <q-separator spaced />
          <div class="text-h6 q-mb-sm">Saúde</div>

          <q-toggle v-model="dog.health.castrated" label="Castrado" />
          <q-toggle v-model="dog.health.inHeart" label="No cio" />
          <q-toggle v-model="dog.health.disease" label="Possui doença?" />
          <q-input
            v-if="dog.health.disease"
            v-model="dog.health.diseaseDesc"
            label="Descrição da doença"
            outlined
            dense
            rounded
          />
          <q-toggle v-model="dog.health.allergies" label="Possui alergias?" />
          <q-input
            v-if="dog.health.allergies"
            v-model="dog.health.allergiesDesc"
            label="Descrição das alergias"
            outlined
            dense
            rounded
          />

          <q-separator spaced />

          <div class="text-h6 q-mb-sm">Veterinário</div>
          <div>
            <q-input
              v-model="dog.health.vet.name"
              label="Nome do Veterinário"
              outlined
              dense
              rounded
            />
            <q-input
              v-model="dog.health.vet.phone"
              label="Telefone do Veterinário"
              outlined
              dense
              rounded
            />
          </div>

          <q-btn type="submit" label="Salvar" color="primary" class="q-mt-md" />
        </q-scroll-area>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Owner {
  name: string;
  addres: string;
  district: string;
  cpf: string;
  phone: string;
}

interface Veterinarian {
  name: string;
  phone: string;
}

interface health {
  vet: Veterinarian | null;
  castrated: boolean;
  inHeart: boolean;
  disease: boolean;
  diseaseDesc: string | null;
  allergies: boolean | null;
  allergiesDesc: string | null;
}

interface Dog {
  name: string;
  age: string;
  birthday: string;
  sexo: string;
  gender: string;
  size: string;
  breed: string;
  instagram: string;
  owner: Owner;
  health: health;
}

const dog = ref<Dog>({
  name: "",
  age: "",
  birthday: "",
  sexo: "",
  gender: "",
  size: "",
  breed: "",
  instagram: "",
  owner: {
    name: "",
    addres: "",
    district: "",
    cpf: "",
    phone: "",
  },
  health: {
    vet: {
      name: "",
      phone: "",
    },
    castrated: false,
    inHeart: false,
    disease: false,
    diseaseDesc: null,
    allergies: null,
    allergiesDesc: null,
  },
});

const sizes = ["Pequeno", "Médio", "Grande"];
const genders = ["Macho", "Fêmea"];
</script>
