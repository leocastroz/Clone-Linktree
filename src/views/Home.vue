<script setup>
import router from '../router';

const nextPage = () => {
  router.push('/en')
}
</script>

<template>
  <div class="bg-gradient-to-r from-[#193558] via-[#1B1445] to-[#481A54] w-screen h-screen flex items-center justify-center">
    <div class="w-96 grid justify-center"> 
      <img class="drop-shadow-lg mb-3 border border-[#8300ff] rounded-md animate__animated animate__animated animate__rollIn animate__delay-1s" src="../assets/logo.svg" alt="logo" width="60">
      <p class="font-extrabold text-[38px] text-purple-500 bg-gradient-to-br from-purple-500 to-indigo-600 animate__animated animate__fadeInDown animate__delay-2s" style="background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Leonardo Castro</p>
      <p class="font-extrabold text-[20px] text-slate-500 animate__animated animate__fadeInDown animate__delay-3s">Frontend Developer</p>
      <p class="font-normal text-[12px] text-slate-500 my-10 animate__animated animate__fadeInDown animate__delay-4s">developed by Leonardo - in 2024 ☕️</p>
      <div @click="nextPage" class="border border-[#6b4291] rounded-md w-32 text-slate-400 hover:text-white flex items-center p-[6px] justify-center cursor-pointer transition duration-500 ease-in-out bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 animate__animated animate__fadeInDown animate__delay-5s">
        <p class="text-xs">Let´s Go</p>
        <span class="px-2">&#10132;</span>
      </div>
    </div>
  </div>
</template>