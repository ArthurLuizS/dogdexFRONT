import { defineStore } from "pinia";

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
  active: boolean | null;
  title: string | null;
  query: string;
}

export const useHeader = defineStore("header", {
  state: () =>
    ({
      active: null,
      action: null,
      secondaryActions: null,
      search: null,
      query: "",
      title: null,
      reload: true,
    } as State),
  getters: {},
  actions: {},
});
