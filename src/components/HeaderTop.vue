<script>
import LetImagem from './LetImagem.vue'
export default {
  components: {
    LetImagem
  },
  setup () { return {} },
  methods: {
    playSound() {
      this.$refs.sound.play();
    }
  }
}
</script>
<template>

<header>
  <div class="letImage">
    <LetImagem />
  </div>
  <p>Leonardo Castro <span>" Frontend Developer "</span></p>
  <div class="events" id="touch_mouse">
    <div id="show" class="alert" name="alert">
      <p>
        Clique no icone para escutar o audio
      </p>
    </div>
    <span @click="playSound" id="sound" class="material-symbols-outlined">volume_up</span>
    <audio ref="sound">
      <source src="../assets/Leonardo-Castro.mp3" type="audio/mp3">
    </audio>
  </div> 

  <a href="https://github.com/leocastroz" target="_blank">Github</a>
  <a href="https://www.linkedin.com/in/leoscastro/" target="_blank">Linkedin</a>
  <a href="https://www.instagram.com/leocastro_x/" target="_blank">Instagram</a>
  <a href="https://www.facebook.com/LeonardoCastro.Leoneell/" target="_blank">Facebook</a>
  <a href="https://api.whatsapp.com/send?phone=+5594992195331text=Olá%Leonardo!" target="_blank">WhatsApp</a>
</header>
</template>

<style scoped>
#show {
  display: none;
}

#touch_mouse:hover #show {
  display: block;
}

.alert {
  background-color: #2e2e2e;
  position: absolute;
  border-radius: 5px;
  margin-left: -50px;
  margin-top: 20px;
  padding: 5px;
  width: 150px;
}

.alert p{
  font-size: 10px;
  color: #bdfb60;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header{
  background-image: url('../assets/background.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: grid;
  width: 100vw;
}

header img{
  box-shadow: 0px 0px 100px #272727;
  margin: 30px auto 0 auto;
  border-radius: 100%;
  width: 200px;
}

.letImage{
  margin: 30px auto 0 auto;
  height: 200px;
  width: 200px;
}

header p{
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: 22px;
  color: #fff;
}

header a{
  background: -webkit-linear-gradient(#272727, #8e8e8e92);
  font-family: 'Poppins', sans-serif;
  justify-content: center;
  text-decoration: none;
  border-radius: 100px;
  align-items: center;
  font-weight: bold;
  font-weight: 300;
  font-size: 14px;
  margin: 0 auto;
  color: #fff;
  display: flex;
  width: 180px;
  height: 45px;
  margin-top: -20px;
}

span{
  color: #bdfb60;
  font-size: 14px;
}

#sound{
  margin-top: -20px;
  cursor: pointer;
  font-size: 30px;
  color: #fff;
}

.events{
  margin: 0 auto;
  display: flex;
  height: 30px;
}
</style>
