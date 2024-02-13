<template>
    <div class="header">
        <div class="container">
           <div class="banner">
            <img src="@/assets/images/banner.jpg">
           </div>
           <div class="search_box">
            <div class="search_list">
                <ul>
                    <li>全部</li>
                    <li>目的地</li>
                    <li>酒店</li>
                </ul>
            </div>
            <div class="input_search">
            <input placeholder="我要去">
            </div>
            <img src="@/assets/images/search.jpg" height="40px">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    position: relative;
    .search_box{
    width: 500px;
    height: 100px;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,180px);
    top: 100px;
    border-radius: 5px;
    .search_list{
        position:absolute;
        top:10px;
        left:20px;
        cursor: pointer;
        color: white;
        height: 20px;
        ul{
            line-height: 20px;
            li{
            float: left;
            padding: 0 20px;
        }
        }
    }
    .input_search{
        position: absolute;
        top: 20px;
        margin:20px 30px 0 20px;
        padding: 10px;
        background-color: #fff;
        border-radius: 5px;
        height: 40px;
        width: 80%;
        padding-left: 10px;
    input{
        color: black;
        border: 0px;
        outline: none;
        width: 90%;
    }
    }
   img{
    position: absolute;
    right: 35px;
    top: 40px;
    border-radius: 5px;
    cursor: pointer;
   }
}
}
.banner{
    width: 100%;
    img{
        width: 100%;
    }

}
</style>