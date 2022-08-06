<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from '@/components/Home.vue'
import Nav from './components/Nav.vue'
import axios from 'axios'
import About from './components/About/About.vue'
</script>

<template>

    <Nav style="margin-top: -42px;" />

    <!-- <HelloWorld/> -->
    <ul>
        <li>
            <a href="https://wa.me/21627435435">
                <img id="wta" src="https://avantgarde.tn/static/img/whatsup.png" alt="">
            </a>
        </li>
    </ul>
    <router-view />
    <About style="margin-bottom: -52px;" />
</template>

<style>
@import '@/assets/base.css';

* {
    margin: 0px;
    padding: 0px;
    margin-left: 0px;
    padding-left: 0px;
    padding-top: 0px;
    left: 0px;
}

#wta {
    position: fixed;
    transform: rotate(-90deg);
    margin-left: -38px;
    margin-top: 44px;
}
</style>

