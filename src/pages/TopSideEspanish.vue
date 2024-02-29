<script setup>
import router from '../router';
const goToPage = (event) => {
  const lang = event.target.value;
  if (lang === 'English') {
    router.push('/en');
  }
  if (lang === 'Portuguese') {
    router.push('/pt');
  }
  // Adicione mais condições para outros idiomas, se necessário
}
</script>

<template>
  <div class="bg-gradient-to-r from-[#193558] via-[#1B1445] to-[#481A54] w-full h-16 flex items-center animate__animated animate__fadeInDown">
    <div class="w-full mx-auto px-10 flex justify-between text-white">
      <p>Español</p>
      <select class="text-black cursor-pointer" @change="goToPage">
        <option disabled value="">Please select language</option>
        <option value="English">Inglés</option>
        <option value="Portuguese">Portugués</option>
        <option value="Espanish" selected="selected">Español</option>
      </select>
    </div>
  </div>
</template>