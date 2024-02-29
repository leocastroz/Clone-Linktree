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
}
</script>

<template>
  <div class="bg-[#18122e] w-full h-16 flex px-10 items-center justify-between animate__animated animate__fadeInDown">
    <div class="text-white">
      <p>Hi, Welcome</p>
    </div>
    <div class="flex items-center">
      <span class="text-violet-400 pr-3 text-xl">&#9873;</span>
      <select class="text-white cursor-pointer bg-transparent w-32 text-xs gap-4 bg-violet-600 p-2 rounded outline-none" @change="goToPage">
        <option disabled class="text-slate-400">Choose a language</option>
        <option value="English" selected="selected">English
        </option>
        <option value="Portuguese">Portuguese</option>
        <option value="Espanish">Espanish</option>
      </select>
    </div>
  </div>
</template>