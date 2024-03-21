<template>
    <el-row class="tac">
    <el-col :span="90">
      <el-menu
        default-active="2"
        
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>最新墙</span>
          </template>
          <el-menu-item-group title="分组1">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>表白墙</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>分享墙</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>买卖墙</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><setting /></el-icon>
          <span>综合墙</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped>
.el-row{
    width: 100%;
}
.tac{
    display: block;
    width: 100%;
    background-color: white;
}
.el-menu{
    border: none;
}
.el-menu-item.is-active{
    color: white;
    background-color: rgb(67, 137, 235);
}
</style>