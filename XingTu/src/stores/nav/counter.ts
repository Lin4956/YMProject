import { ref, computed,reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
//导航栏数据管理
export const navCounterStore = defineStore('nav',()=>{
  let leftData = reactive([
    { id: 1, name: '首页', address: '/home' },
    { id: 2, name: '目的地', address: '/destination' },
    { id: 3, name: '酒店', address: '/hotel' }, 
    { id: 4, name: '社区攻略', address: '/community' }
  ])
  let rightData = reactive([
    { id: 1, name: '请登录', address: '/login' },
    { id: 2, name: '帮助中心', address: '/help' },
    { id: 3, name: '关于我们', address: '/about' }
    ])
  let test = ref(1)
  function add(){
    test.value++//vue3的组合式api不需要this 需要value
    console.log(test.value);
    
  }
  return { leftData, rightData,add }
})