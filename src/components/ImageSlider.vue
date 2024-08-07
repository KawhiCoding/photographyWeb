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

export default {
setup() {
    const images = ref([
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
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
</style>