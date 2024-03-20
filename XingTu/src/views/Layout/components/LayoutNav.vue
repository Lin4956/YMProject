<template>
  <div class="stick"/>
  <div class="nav">
    <div class="logo"><img src="@/assets/images/logo.jpg " height="53px" width="70px"></div>
    <div class="top">
      <ul>
        <li v-for="item in leftData" :key="item.id"><router-link :to="item.address" active-class="choose">{{item.name}}</router-link></li>
          <div class="container"> 
            <ul>
              <li v-for="item in rightData" :key="item.id"><router-link :to="item.address" active-class="choose">{{item.name}}</router-link></li>
              <!-- <button @click="store.add"></button> -->
            </ul>
          </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { navCounterStore } from '@/stores/nav/counter'
import { onMounted } from 'vue';
const store = navCounterStore()
const {leftData,rightData} = store//pinia的导航栏数据

//获取页面滚动
const {y} = useScroll(window)
</script>

<style lang="scss" scoped>
.stick{
  height: 53px;
}
.nav{
  position: fixed;
  top: 0px;
  z-index: 1;
  background-color: #fff;
  display: flex;
  .logo{
    margin-left: 150px;
  }
  .top{
    width: 50%;
    ul{
      display: flex;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      li{
        border-left: 0;
        line-height: 53px;
        width: 150px;
      }
    }
  }
  li:hover{
    a{
        color: rgb(67, 137, 235);
    }
  }
  .container{
    ul{
      display: flex;
      height: 53px;
      justify-content: flex-end;
      align-items: center;
    li{
      width:60px;
      text-align: center;
      margin: 0 5px;
      border-left: 1px solid white;
      line-height: 53px;
    }
  }
  
  li:hover{
    a{
        color: rgb(67, 137, 235);
    }
    cursor: pointer;  
    border-bottom: 2px solid rgb(67, 137, 235);
    }
  }
  }
  .top a.choose{
    display: block;
    color: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
    background-color: rgb(67, 137, 235);
  }
  .top a.choose:hover{
    display: block;
    color: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
    background-color: rgb(67, 137, 235);
  }
</style>@/stores/nav/counter