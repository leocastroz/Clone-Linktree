<script setup>
import CustomCursor from './components/CustomCursor.vue'
</script>

<template>
  <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
  <CustomCursor />
</template>
