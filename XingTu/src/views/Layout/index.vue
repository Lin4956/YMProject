<template>
    <LayoutNav/>
    <LayoutHeader/>
    <RouterView/>
    <LayoutFooter/>
</template>

<script setup lang="ts">
    import LayoutFooter from './components/LayoutFooter.vue'
    import LayoutHeader from './components/LayoutHeader.vue'
    import LayoutNav from './components/LayoutNav.vue'
</script>

<style scoped>

</style>         