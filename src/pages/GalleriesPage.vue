<template>
    <div id="q-app" style="min-height: 100vh;">
      <div class="q-pa-md">
        <q-scroll-area style="height: 230px; max-width: fit;">
          <div class="row no-wrap">
            <div v-for="(image, index) in images" :key="index" style="width: 150px" class="q-pa-sm">
              <img :src="image" alt="Image" style="width: 100%; height: auto;">
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import imageOne from 'src/data/images/imageOne.jpg'
  import imageTwo from 'src/data/images/imageTwo.jpg'
  import imageThree from 'src/data/images/imageThree.jpg'
  import imageFour from 'src/data/images/imageFour.jpg'
  import imageFive from 'src/data/images/imageFive.jpg'

  export default {
    setup() {
      const images = ref([
        imageOne,
        imageTwo,
        imageThree,
        imageFour,
        imageFive,
        imageOne,
        imageTwo,
        imageThree,
        imageFour,
        imageFive,
        imageOne,
        imageTwo,
        imageThree,
        imageFour,
        imageFive,
        imageOne,
        imageTwo,
        imageThree,
        imageFour,
        imageFive,
      ]);
  
      return {
        images
      };
    },
  }
</script>
  
<style>
.q-scroll-area {
    background-color: #f5f5f5;
    border-radius: 8px;
  }
  
.image-container {
  width: 150px;
  height: 150px;
  padding: 8px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

</style>