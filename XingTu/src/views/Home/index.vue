<template>
    <div class="app_home">
        <div class="recommend">
            <recommendVue/>
        </div>
        <div class="tag">
            <tagVue/>
        </div>
    </div>
</template>

<script setup lang="ts">
import recommendVue from "./components/recommend.vue";
import tagVue from "./components/tag.vue";
</script>

<style scoped lang="scss">
.app_home{
    display: inline-block;
    background-color: skyblue;
    margin: 0 120px;
    padding-top: 30px;
    width: 85%;
    .recommend{
        float: left;
        margin-right: 20px;
        height: 500px;
        width: 300px;
        background-color: #fff;
        
    }
    .tag{
        float: right;
        color: white;
        width: 750px;
        height: 1500px;
        background-color: black;
    }
}
</style>