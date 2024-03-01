<template>
  <div class="custom-cursor" :style="{ left: x + 'px', top: y + 'px' }"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const x = ref(0);
const y = ref(0);

const handleMouseMove = (event) => {
  x.value = event.pageX;
  y.value = event.pageY;
};

onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
.custom-cursor {
  border-radius: 100%;
  box-shadow: 0 0 400px 100px #bd87ff1d;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
}
</style>
