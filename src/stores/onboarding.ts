import { defineStore } from "pinia";

export interface onboardingData {
  name: string;
  phone: string;
  email: string; //falta
  cpf: string;
  address: string;
  district: string;
  dog: {
    name: string;
    age: number;
    birth_date: string;
    gender: "M" | "F";
    size: "P" | "M" | "G";
    breed: string;
    instagram: string;
    is_active: boolean;
  };
  health: {
    has_vet: boolean;
    vet_name: string;
    vet_phone: string;
    castrated: boolean;
    in_heat: boolean;
    chronic_disease: boolean;
    disease_description: string;
    allergies: string;
    special_recommendations: string; //falta
  };
}

export const useOnboarding = defineStore("onboarding", {
  state: () =>
    ({
      name: "",
      phone: "",
      email: "",
      cpf: "",
      address: "",
      district: "",
      dog: {
        name: "",
        age: 0,
        birth_date: "",
        gender: "F",
        size: "P",
        breed: "",
        instagram: "",
        is_active: true,
      },
      health: {
        has_vet: false,
        vet_name: "",
        vet_phone: "",
        castrated: true,
        in_heat: false,
        chronic_disease: false,
        disease_description: "",
        allergies: "",
        special_recommendations: "",
      },
    } as onboardingData),
  getters: {},
  actions: {},
});
