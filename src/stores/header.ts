import { defineStore } from "pinia";

interface State {
  active: boolean | null;
  action: {
    function: (() => void) | null;
    icon: string;
    label: string;
  } | null;
  secondaryActions:
    | {
        function: () => void;
        icon: string;
        label: string;
      }[]
    | null;
  search: ((query: string) => unknown) | null;
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
