<template>
    <div class="box">{{ billboard.content }}</div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import { getBillboard } from '@/apis/billboard'
    let billboard =  reactive({content: ''})
    function axiosBillboard(){
        getBillboard().then((value)=>{
            const {data} = value
            billboard.content = data
        })
    }
    axiosBillboard()
</script>

<style scoped></style>