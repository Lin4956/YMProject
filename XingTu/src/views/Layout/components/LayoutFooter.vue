<template>
    <footer class="app_footer">
     <div class="copyright">
            <p class="info">
                <a href="javascript:;">关于我们</a>
                <a href="javascript:;">帮助中心</a>
                <a href="javascript:;">售后服务</a>
                <a href="javascript:;">旅游网</a>
                <a href="javascript:;">商务合作</a>
                <a href="javascript:;">搜索推荐</a>
                <a href="javascript:;">友情链接</a>
            </p>
            <p>CopyRight © 行途--你的贴心旅游管家</p>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.app_footer{
    border-top: 1px solid grey;
    padding-bottom: 20px;
    padding-top: 5px;
.copyright{
    text-align: center;
    a:nth-child(1){
        border-left: none;
    }
    a{
    color: grey;
    padding: 0 10px;
    border-left: 1px solid grey;
    }
    p{
        color: grey;
        margin: 20px 0;
    }
}
}

</style>