import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export interface Dog {
  name: string;
  age: number;
  birth_date: string;
  gender: "M" | "F";
  size: "P" | "M" | "G";
  breed: string;
  instagram: string;
  is_active: boolean;
}

interface State {
  allDogs: Dog[];
}

export const useDogs = defineStore("dogs", {
  state: () =>
    ({
      allDogs: [],
    } as State),
  getters: {},
  actions: {
    async getAllDogs() {
      try {
        const { data } = await api.get("/dogs/");
        this.allDogs = data;
        return this.allDogs;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
});
