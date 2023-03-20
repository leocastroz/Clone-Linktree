<template>
    <div>
        <img @click="changeImage" :key="currentImage" :src="currentImage" alt="Imagem atual" />
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        images: [
            'https://avatars.githubusercontent.com/u/72839343?v=4',
            'https://scontent.fcks1-1.fna.fbcdn.net/v/t39.30808-6/324510305_572318311382816_480107762223642830_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEmxnVjrjvwkwZxYI22SLfAKmQiziRBR1gqZCLOJEFHWGvfRHdX6tDE4NeO94C6tF_mg4YwZ7pydmKerECBWHc3&_nc_ohc=ZLTIN4k3qFkAX9pip4R&_nc_ht=scontent.fcks1-1.fna&oh=00_AfD6Q7PA_cIoYOsR7YqRhJS0frOwE3WWl-K6V8HAidk-XA&oe=641D149F',
            'https://scontent.fcks1-1.fna.fbcdn.net/v/t39.30808-6/306506341_2196547510524566_1532355323666799298_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeENUjyFmthBvixdYSz0esP5dosoJZuD8yx2iyglm4PzLFB-sQpkSC-qSCO6mtCZUgBRqI5i_2lmGkCrI6VB9uz4&_nc_ohc=NcCNygXVRV4AX_jcklp&_nc_ht=scontent.fcks1-1.fna&oh=00_AfDAeuxKSrPTgAntYamGEgFMRqllGh8xB1Nsh_fLRVP7dw&oe=641D2752',
            'https://scontent.fcks1-1.fna.fbcdn.net/v/t39.30808-6/317999183_2273665229479460_2527744596935666941_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHALgcpCgZzsnT5HakiQpZpLUHAZseLoBUtQcBmx4ugFdfZacH4nJBi_XDfaL3d8rDWRIREnK3PmYEx-deKIRTo&_nc_ohc=rSSUpCM8RpgAX_hQBO4&_nc_ht=scontent.fcks1-1.fna&oh=00_AfAANzu9F45YFlB_F3J1A6VqTJ6PyhyYDIc9OMVqhM00zQ&oe=641CDC5C',
            'https://scontent.fcks1-1.fna.fbcdn.net/v/t39.30808-6/291311699_2142056349307016_8505505760392870634_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH-lK_KEf_12rLJwh7nMj7be2zmjZSTqKV7bOaNlJOopZm64ubgWfdvvdilhGQBkndrNqyBJJl5-eSGVrFva2m-&_nc_ohc=O0ShdzXKzDkAX-aTyN1&_nc_ht=scontent.fcks1-1.fna&oh=00_AfAYdGndxZ74MROm2196HoX48ZCSsxzE1szueFF5ygL3bA&oe=641D5F6C',
            'https://scontent.fcks1-1.fna.fbcdn.net/v/t39.30808-6/332875172_1647759892400164_8987230447393219000_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG8h2WzAfNmOgpDBVzw_53X2tUIIrPlhMTa1Qgis-WExE2JE6zyWCPGeWU_2F3KjPu8W3H8P7YcrzSSNDYWRtcB&_nc_ohc=YCaRqZq8ZigAX8yhn2t&_nc_ht=scontent.fcks1-1.fna&oh=00_AfDNkk7Wr8saj-nNjGWKJZecXrJDDxRe32_Tc1Z7odbFRw&oe=641CD335',
            
        ],
        currentImageIndex: 0,
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentImageIndex];
      },
    },
    methods: {
      changeImage() {
        this.currentImageIndex++;
        if (this.currentImageIndex >= this.images.length) {
          this.currentImageIndex = 0;
        }
      },
    },
  };
</script>
<style scoped>
div{
    border-radius: 100%;
    width: 200px;
    background-color: none;
}
img{
    height: 200px;
    border-radius: 100%;
    width: 200px;
}
</style>