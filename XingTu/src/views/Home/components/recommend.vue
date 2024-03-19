<template>
    <div>
        <h1 class="rec-logo">
            <a src="#">景点推荐</a>
        </h1>
        <div class="rec-replace">
            <ul>
                <li>
                    <div class="rec-img"></div>
                    <div class="rec-text"></div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.rec-logo{
    margin-top:10px;
    margin-left: 25px;
    cursor: pointer;
}
.rec-replace{
    background-color: yellow;
    width: 80%;
    height: 250px;
    margin:10px 30px;
    .rec-img{
        background-color: green;
        width:100%;
        height:140px;
    }
    .rec-text{
        background-color: #f41111;
        width:100%;
        height:110px;
    }
}
</style>
