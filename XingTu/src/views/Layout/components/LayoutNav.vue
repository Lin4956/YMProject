
<template>
  <nav class="nav">
    <div class="logo"><img src="@/assets/images/logo.jpg " height="53px" width="100px"></div>
    <div class="top_left">
      <ul>
          <li><router-link to="/home" active-class="choose">首页</router-link></li>
          <li><router-link to="/destination" active-class="choose">目的地</router-link></li>
          <li><router-link to="/hotel" active-class="choose">酒店</router-link></li>
          <li><router-link to="/community" active-class="choose">社区攻略</router-link></li>
      </ul>
    </div>
    <div class="container"> 
      <ul>
        <li><router-link to="#" active-class="choose">请登录</router-link></li>
        <li><router-link to="#" active-class="choose">帮助中心</router-link></li>
        <li><router-link to="#" active-class="choose">关于我们</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.nav{
  background-color: #fff;
  display: flex;
  .logo{
    margin-left: 150px;
  }
  .top_left{
    float: left;
    width: 50%;
    ul{
      display: flex;
      justify-content: center;
      li{
        border-left: 0;
        line-height: 53px;
      }
    }
  }
    ul{
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
    li{
      width:60px;
      text-align: center;
      margin: 0 5px;
      border-left: 1px solid white;
      line-height: 53px;
    }
  }

  li:hover{
    color: rgb(67, 137, 235);
    cursor: pointer;  
    border-bottom: 2px solid rgb(67, 137, 235);
    }

  }
  .top_left a.choose{
    display: block;
    color: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
    background-color: rgb(67, 137, 235);
  }
</style>