import { defineStore } from "pinia";
import { http } from "@/service/index";
export interface User {
  id: string;
  name: string;
  username: string;
  phone: string;
}
export enum STATUS {
  LOADING = "LOADING",
  ERROR = "ERROR",
  VOID = "",
}
export const useStore = defineStore("main", {
  state: () => ({
    users: [] as User[],
    status: STATUS.VOID as STATUS,
  }),
  getters: {
    loading: (state) => state.status === STATUS.LOADING,
    error: (state) => state.status === STATUS.ERROR,
  },
  actions: {
    async GET_USERS() {
      try {
        this.status = STATUS.LOADING;
        const { data } = await http.get("/users");
        this.status = STATUS.VOID;
        this.users = data.map((e: any) => ({
          id: e.id,
          name: e.name,
          username: e.username,
          phone: e.phone,
        }));
      } catch (e) {
        this.status = STATUS.ERROR;
      }
    },
  },
});
