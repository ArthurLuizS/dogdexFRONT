import { defineStore } from "pinia";
import { api } from "src/boot/axios";
export interface OwnerData {
  id: string | null;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  address: string;
  district: string;
}

interface State {
  owner: OwnerData;
  allsOwners: OwnerData[];
}

export const useOwner = defineStore("owner", {
  state: () =>
    ({
      owner: {
        id: null,
        name: "",
        phone: "",
        email: "",
        cpf: "",
        address: "",
        district: "",
      },
      allsOwners: [],
    } as State),
  getters: {},
  actions: {
    async getAllOwners() {
      try {
        const { data } = await api.get("/owners/");
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
