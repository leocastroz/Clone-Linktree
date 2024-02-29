<script setup>
import router from '../router';
const goToPage = (event) => {
  const lang = event.target.value;
  if (lang === 'Portuguese') {
    router.push('/pt');
  }
  if (lang === 'Espanish') {
    router.push('/es');
  }
  // Adicione mais condições para outros idiomas, se necessário
}
</script>

<template>
  <div class="bg-gradient-to-r from-[#193558] via-[#1B1445] to-[#481A54] w-full h-16 flex items-center animate__animated animate__fadeInDown">
    <div class="w-full mx-auto px-10 flex justify-between text-white">
      <p>English</p>
      <select class="text-black cursor-pointer" @change="goToPage">
        <option disabled value="">Please select language</option>
        <option value="English" selected="selected">English</option>
        <option value="Portuguese">Portuguese</option>
        <option value="Espanish">Espanish</option>
      </select>
    </div>
  </div>
</template>