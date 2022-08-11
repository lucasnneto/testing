import { defineStore } from "pinia";

export const useStore = defineStore("count", {
  state: () => ({
    count: 1,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    add(value = 1) {
      this.count += value;
    },
    reduce(value = 1) {
      this.count -= value;
    },
  },
});
