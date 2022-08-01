<script setup>


defineProps({
  msg: String
})


</script>

<template>

<header>
 <img src="https://user-images.githubusercontent.com/72839343/181359023-213c387b-60b8-408c-9814-6da726ffc21a.png" alt="">
  <p>Leonardo S. Castro ☕</p>
  <a href="https://github.com/leocastroz">Github</a>
  <a href="linkedin.com/in/leoscastro">Linkedin</a>
  <a href="https://www.instagram.com/leocastro_x/">Instagram</a>
  <a href="https://www.facebook.com/LeonardoCastro.Leoneell/">Facebook</a>
  <a href="https://api.whatsapp.com/send?phone=+5594992195331text=Olá%Leonardo!">WhatsApp</a>
</header>

 
</template>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header{
  width: 100vw;
  height: 100vh;
  display: grid;
  background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgb(28, 28, 28) 100%);
}

header img{
  width: 200px;
  border-radius: 100%;
  margin: 40px auto 0 auto;
  box-shadow: 0px 0px 100px #39f79b;
}

header p{
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  Font-family: 'Poppins', sans-serif;
}

header a{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    width: 180px;
    height: 45px;
    text-decoration: none;
    background: -webkit-linear-gradient(#00FF85, #FCFF7E);
    margin: 0 auto;
    color: rgb(0, 0, 0);
    font-size: 14px;
    border-radius: 100px;
}

</style>
