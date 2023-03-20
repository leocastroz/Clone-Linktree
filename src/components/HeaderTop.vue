<script>
export default {
    setup () {
        return {}
    },
  methods: {
    playSound() {
      this.$refs.sound.play();
    }
  }
}
</script>
<template>

<header>
 <img src="https://avatars.githubusercontent.com/u/72839343?v=4" alt="profile github">
  <p>Leonardo Castro <span>" Frontend Developer "</span></p>

  <div class="events" id="touch_mouse">
    <div id="show" class="alert" name="alert">
      <p>
        Clique no icone para escutar o audio
      </p>
    </div>
    <span @click="playSound" id="sound" class="material-symbols-outlined">volume_up</span>
    <audio ref="sound">
      <source src="../assets/Leonardo Castro.m4a" type="audio/mp4">
    </audio>
  </div> 

  <a href="https://github.com/leocastroz">Github</a>
  <a href="linkedin.com/in/leoscastro">Linkedin</a>
  <a href="https://www.instagram.com/leocastro_x/">Instagram</a>
  <a href="https://www.facebook.com/LeonardoCastro.Leoneell/">Facebook</a>
  <a href="https://api.whatsapp.com/send?phone=+5594992195331text=Olá%Leonardo!">WhatsApp</a>
</header>

 
</template>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


#show {
  display: none;
}

#touch_mouse:hover #show {
  display: block;
}

.alert {
  margin-left: -50px;
  margin-top: 20px;
  background-color: #2e2e2e;
  position: absolute;
  width: 150px;
  padding: 5px;
  border-radius: 5px;
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
  background-image: url('https://cutewallpaper.org/27/black-out-background-wallpaper/1011426618.jpg');
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

header p{
  Font-family: 'Poppins', sans-serif;
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
