import { defineStore } from "pinia";

export interface BreadcrumItem {
  label: string;
  url?: string;
}

interface State {
  breadcrumItems: BreadcrumItem[];
}

export const useCommonStore = defineStore("common", {
  state: (): State => ({
    breadcrumItems: [],
  }),

  actions: {
    setBreadcrum(items: BreadcrumItem[]) {
      this.breadcrumItems = items;
    },
  },
});
