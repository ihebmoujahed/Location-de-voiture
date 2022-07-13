<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from '@/components/Home.vue'
import Nav from './components/Nav.vue'
import axios from 'axios'

</script>

<template>
<Nav/>
<!-- <HelloWorld/> -->
<router-view/>
</template>

<style>
@import '@/assets/base.css';
*{
margin:0px;
padding:0px;
margin-left:0px;
padding-left:0px;
padding-top:0px;
left:0px;
}


</style>

