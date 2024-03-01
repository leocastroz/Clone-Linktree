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
}
</script>

<template>
  <div class="bg-[#18122e] w-full h-32 flex px-10 items-center justify-between animate__animated animate__fadeInDown">
    <div class="text-white">
      <p class="font-extrabold text-[18px] text-purple-500 bg-gradient-to-br from-purple-500 to-indigo-600 animate__animated animate__fadeInDown" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent;">Olá, visitante!</p>
      <div class="flex pt-5 w-24 justify-between">
        <a href="https://github.com/leocastroz" target="_blank"><img src="../assets/github.svg" alt="github" class="transition duration-500 hover:scale-125 cursor-pointer animate__animated animate__fadeIn animate__delay-1s" width="20"></a>
        <a href="https://www.linkedin.com/in/leoscastro/" target="_blank"><img src="../assets/linkedin.svg" alt="github" class="transition duration-500 hover:scale-125 cursor-pointer animate__animated animate__fadeIn animate__delay-2s" width="20"></a>
        <a href="https://www.facebook.com/leocastroz/" target="_blank"><img src="../assets/facebook.svg" alt="github" class="transition duration-500 hover:scale-125 cursor-pointer animate__animated animate__fadeIn animate__delay-3s" width="20"></a>
      </div>
    </div>
    <div class="flex items-center">
      <span class="text-violet-400 pr-3 text-xl">&#9873;</span>
      <select class="text-white cursor-pointer bg-transparent w-32 text-xs gap-4 bg-violet-600 p-2 rounded outline-none" @change="goToPage">
        <option disabled class="text-slate-400">Escolha um idioma</option>
        <option value="English" selected="selected">Inglês
        </option>
        <option value="Portuguese" selected="selected">Português</option>
        <option value="Espanish">Espanhol</option>
      </select>
    </div>
  </div>
</template>