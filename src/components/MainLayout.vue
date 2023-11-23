<script>
export default {
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
    <img src="https://avatars.githubusercontent.com/u/72839343?v=4" alt="profile-github">
  </div>
  <p>Leonardo S. Castro</p>
  <span>22y | Frontend Developer</span>
  <div class="events" id="touch_mouse">
    <span @click="playSound" id="sound" class="material-symbols-outlined">volume_up</span>
    <audio ref="sound">
      <source src="../assets/Leonardo-Castro.mp3" type="audio/mp3">
    </audio>
  </div> 

  <div class="social-links">
    <a href="https://github.com/leocastroz" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/leoscastro/" target="_blank">Linkedin</a>
    <a href="https://www.instagram.com/leocastro_x/" target="_blank">Instagram</a>
    <a href="https://www.facebook.com/LeonardoCastro.Leoneell/" target="_blank">Facebook</a>
    <a href="https://api.whatsapp.com/send?phone=+5594992195331text=Olá%Leonardo!" target="_blank">WhatsApp</a>
  </div>

  <div class="min-foooter">
    <p>development by Leonardo ☕️</p>
  </div>
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
  display: grid;
  width: 100vw;
}

header img{
  box-shadow: 0px 0px 20px #272727;
  margin: 0 auto;
  border-radius: 100%;
  width: 180px;
  height: 180px;
}

.letImage{
  margin: 0 auto;
  padding: 30px;

}

header p{
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: 22px;
  color: #374152;
}

header a{
  background-color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 300;
  font-size: 14px;
  color: #a3a3a3;
  min-width: 250px;
  text-align: center;
  margin: 5px;
  padding: 10px 0px;
  transition: all 0.3s ease-out;
}

header a:hover{
  background-color: #374152;
  color: #ffffff;
}

span{
  padding: 0px 0 15px 0;
  text-align: center;
  color: #a3a3a3;
  font-size: 13px;
  font-weight: 300;
}

#sound{
  padding: 5px;
  background-color: #374152;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #fff;
}

.events{
  margin: 0 auto;
  display: flex;
  height: 30px;
}
.social-links{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 30px;
  width: 250px;
}

.min-foooter p {
  margin-top: 30px;
  font-size: 12px;
  font-weight: 300;
  color: #a3a3a3;
}
</style>
