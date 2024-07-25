<template>
  <div class="full-page">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = true"
      @mouseleave="autoplay = true"
      style="width: 100%; height: 93vh;"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
    
    <!-- Additional content placed underneath the carousel -->
  </div>
    <div class="additional-content">
      <h2>Additional Content Section</h2>
      <p>Here you can add more elements, such as text, buttons, or other components.</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const slide = ref(1);
const autoplay = ref(true);
</script>

<style scoped>
.full-page {
  width: 100vw;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.additional-content {
  margin-top: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
