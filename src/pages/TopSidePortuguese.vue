<script setup>
import router from '../router';
const goToPage = (event) => {
  const lang = event.target.value;
  if (lang === 'English') {
    router.push('/en');
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
      <p>Português</p>
      <select class="text-black cursor-pointer" @change="goToPage">
        <option disabled value="">Please select language</option>
        <option value="English">Inglês</option>
        <option value="Portuguese" selected="selected">Português</option>
        <option value="Espanish">Espanhol</option>
      </select>
    </div>
  </div>
</template>