import { defineStore } from "pinia";
import { api } from "src/boot/axios";

interface State {
  userName: string | null;
  token: string | null;
  userId: number | null;
  is_staff: string | null;
}

export const useAuth = defineStore("auth", {
  state: () =>
    ({
      userName: null,
      token: null,
      userId: null,
      is_staff: null,
    } as State),
  getters: {},
  actions: {
    // async login(form: { username: string; password: string }) {
    //   try {
    //     const { data } = await api.post("/user/login/", {
    //       username: form.username,
    //       password: form.password,
    //     });
    //     this.userName = data.result.user;
    //     this.token = data.result.token;
    //     this.userId = data.result.id;
    //     this.is_staff = data.result.is_staff;
    //     this.router.push("/");
    //   } catch (error: unknown) {
    //     if (axios.isAxiosError(error)) {
    //       const axiosError = error as AxiosError;
    //       if (axiosError.response?.status === 401) {
    //         Notify.create({
    //           message: "Usuário ou senha incorreto(s)",
    //           color: "negative",
    //         });
    //         return;
    //       }
    //       if (axiosError.response?.status === 404) {
    //         Notify.create({
    //           message: "Usuário não cadastrado no sistema",
    //           color: "negative",
    //         });
    //         return;
    //       }
    //     }
    //     Notify.create({
    //       message: "Falha efetuando login, por favor tente novamente",
    //       color: "negative",
    //     });
    //   }
    // },
    // logout() {
    //   this.$reset();
    //   if (api.defaults.headers.common.Authorization !== undefined) {
    //     delete api.defaults.headers.common.Authorization;
    //   }
    //   this.router.push("/login");
    // },
  },
});
