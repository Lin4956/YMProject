<template>
    <div class="top_box">
        <div class="box"><p :style="{left:x+'px'}">🔔{{ billboard }}🔔</p></div>
    </div>
</template>

<script setup lang="ts">
import { ref,reactive, onMounted,onBeforeUnmount } from 'vue'
import { getBillboard } from '@/apis/billboard'
        let x = ref(20)
        let billboard =  ref('')
        let intervalId = null
        //公告栏移动函数
       function move(len){
            let intervalId = null
            const boardText = document.querySelector('.box p') as HTMLElement;  
            const box = document.querySelector('.box') as HTMLElement;  
            const boxWidth = box.offsetWidth; // 获取.box的宽度  
            const textWidth = boardText.offsetWidth; // 获取p元素的宽度  
            let doWidth = window.innerWidth
            let direction = 1; // 设置移动方向为1（向右）  
            let maxLeft = boxWidth - (len*textWidth)  ; // 计算p元素可以移动到的最右位置  
            let minLeft = 20; // 计算p元素可以移动到的最左位置（假设10px为内边距或其他需要的空间）  
            intervalId = setInterval(() => {  
                x.value += 1 * direction; // 根据方向移动p元素  
                // 检查是否到达边缘，并反转方向  
                if (x.value >= maxLeft) {  
                direction = -1; // 到达最右，改为向左移动  
                } else if (x.value <= minLeft) {  
                direction = 1; // 到达最左，改为向右移动  
                }  
            }, 100);  
                }
            onMounted(async () => {  
                try {  
                    getBillboard().then((res)=>{
                    const data = res.data.data.content
                    billboard.value = data
                    move(data.length) // 在数据加载后调用move函数  并传入字符长度
                    }).catch(err=>{
                    console.log(err);
                })
                } catch (err) {  
                    console.log(err)  
                }  
            })  
            onBeforeUnmount(() => {  
            clearInterval(intervalId)})
</script>

<style scoped>
.top_box{
    height: 50px;
    background-color: white;
    padding-top: 10px;
}
.box{
    position: relative;
    margin: 0 auto;
    padding-left: 10px;
    background-color: white;
    font:normal bold 15px sans-serif;
    line-height: 38px;
    height: 40px;
    width: 90%;
    box-shadow: rgb(67, 137, 235) 3px 3px 10px;
    border: 1.5px solid black;
    border-radius: 10px;
}
p{
    position: absolute;
    left: 10px;
}
</style>