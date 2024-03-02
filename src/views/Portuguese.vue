<script setup>
import TopSidePortuguese from '../pages/TopSidePortuguese.vue'
// import SectionPortuguese from '../pages/SectionPortuguese.vue';
</script>

<template>
    <div>
        <TopSidePortuguese />
        <div class="w-full px-10 py-10 text-violet-600 animate__animated animate__fadeIn animate__delay-4s">
            <router-link to="/" class="hover:text-white bg-violet-300 px-3 py-1 uppercase text-xs rounded transition duration-500 ease-in-out bg-gradient-to-r hover:from-pink-500 hover:to-orange-500">&#9710; começo</router-link> |
            <router-link to="/pt/sobre" class="hover:text>white">Sobre</router-link> |
            <router-link to="/pt/blog" class="hover:text-white">Blog</router-link> |
        </div>
        <div>
            <router-view />
            <!-- <SectionPortuguese /> -->
        </div>
    </div>
</template>
