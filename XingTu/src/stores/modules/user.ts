import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: "",
    }),
    actions: {
        SET_TOKEN_STATE(token) {
            this.token = token;
        },
        SET_USER_STATE(user) {
            this.user = user;
        },
    },
});
