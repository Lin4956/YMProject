import { defineStore } from 'pinia';

export const useGetters = defineStore({
    id: 'getter',
    state: () => ({
        token: null, // token
        user: null   // 用户对象
    }),
    getters: {
        getToken() {
            return this.token;
        },
        getUser() {
            return this.user;
        }
    }
});
