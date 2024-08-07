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
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <h1>Memorable Moments</h1>
        <h4>Minneapolis studio and outdoor commercial photography
          by professional photographer Abdisatar</h4>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <h1>Memorable Moments</h1>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <h1>Memorable Moments</h1>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg">
        <h1>Memorable Moments</h1>
      </q-carousel-slide>
    </q-carousel>

    <!-- Additional content placed underneath the carousel -->
    <div class="additional-content">
      <h2>Additional Content Section</h2>
      <p>Here you can add more elements, such as text, buttons, or other components.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const slide = ref(1);
const autoplay = ref(true);
</script>

<style scoped>
.q-carousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}


h1 {
  margin: 0; /* Remove default margin */
  text-align: center;
}
h4 {
  margin: 0;
  text-align: center;
}
</style>
