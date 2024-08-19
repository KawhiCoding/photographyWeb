<template>
    <div class="AboutMeHeader">
        <h4>Professional Headshot & Nature Photographer</h4>
        
    </div>
    <div class="AboutMeText1">
        <p style="font-size: 16px;">A Little About My Journey</p>
        <p>Hey there, My name is Abdisatar Jibril. I am an Oromo Photographer based in Minneapolis, Mn</p>
        <p>My journey into photography began with a passion for capturing professional headshots and photos that boost people's confidence.</p>
    </div>
    <div class="AboutMeText2">
        <p>While I'm continually learning, I'm enthusiastic about exploring new styles and gaining valuable experience to enhance my photography skills.</p>
    </div>
    <q-btn 
    id="connect" 
    rounded 
    color="primary" 
    label="Connect with me" 
    size="lg"
    :to="{ path: '/ConnectPage' }"
  />
  <div class="about-me-images">
      <img src="src/data/images/imageTwo.jpg" alt="Image 1" class="overlap-image img1">
      <img src="src/data/images/imageTwo.jpg" alt="Image 2" class="overlap-image img2">
      <img src="src/data/images/imageTwo.jpg" alt="Image 3" class="overlap-image img3">
    </div>
</template>

<script setup>

</script>

<style scoped>
.AboutMeHeader{
    position: relative;
    left: 35%;
    top: 155px;
    
}
.AboutMeText1 {
    position: relative;
    left: 35%;
    top: 160px;
    width: 330px;
    font-size: 19px;
    
}   
.AboutMeText2 {
    position: relative;
    left: 61%;
    top: -75px;
    width: 450px;
    font-size: 19px;
}   
#connect {
    position: relative;
    left: 63%;
    top: -42px;
    width: 350px;
}

.overlap-image {
  position: absolute;
  border-radius: 10px;
  border: 2px solid white; /* Adds a thin black border to each image */
}

.img1 {
  top: 140px;
  left: 130px;
  width: 230px;
  height: auto;
  z-index: 1;
}

.img2 {
  top: 250px;
  left: 220px;
  width: 230px;
  height: auto;
  z-index: 2;
}

.img3 {
  top: 350px;
  left: 160px;
  width: 230px;
  height: auto;
  z-index: 3;
}

</style>