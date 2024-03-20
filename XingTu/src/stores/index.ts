import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import {useGetters} from './getters'
import {useAuthStore}  from './modules/user'


export const useStore = defineStore('store',()=>{
    let store = useAuthStore()
    let user = store.user
    let getter = useGetters()
   return {store,user,getter}
})