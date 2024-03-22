<template>
    <div class="talk_main_box">
        <div class="left">
            <h1>首页</h1>
            <CategoryList></CategoryList>
        </div>
        <div class="main">1</div>
        <div class="right">1</div>
    </div>
</template>

<script setup lang="ts">
import CategoryList from './categorylist.vue';
import { getCategoryList } from '@/apis/community'
        async function getALLCategoryList(){
            await getCategoryList().then(res=>{
                console.log(1);
            })
        }
getALLCategoryList()
</script>

<style scoped lang="scss">
.talk_main_box{
    padding-top: 20px;
    display: flex;
    gap: 20px;
    margin: 0 auto;
    width: 90%;
    height: 900px;
    .left{
        background-color: white;
        border-radius: 10px 0 0 0 ;
        width: 20%;
        height: 500px;
        h1{
            margin: 10px 0 0 20px;
        }
    }
    .main{
        width: 60%;
        background-color: rgb(43, 38, 41);
    }
    .right{
        width: 20%;
        background-color: rgb(77, 182, 115);
    }
}
</style>