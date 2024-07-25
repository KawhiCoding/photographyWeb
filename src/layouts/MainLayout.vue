<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <div>
          <NavBar/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>EssentialLink</q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    
    <q-page-container>
      
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
import NavBar from 'src/components/NavBar.vue';

const linksList: EssentialLinkProps[] = [
  {
    title: 'Linked-In',
    caption: 'linkedin.com/in/abdisatar',
    icon: 'school',
    link: 'www.linkedin.com/in/abdisatar',
  },
  {
    title: 'Instagram',
    caption: 'Jibril-flicks',
    icon: 'school',
    link: 'www.instagram.com/jibril-flicks',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped>
.carousel-container {
  width: 100%;
  height: calc(100vh - 32px); /* Adjust 64px based on your q-header height */
  overflow: hidden; /* Ensure no overflow issues */
  position: relative; /* For positioning of CarouselBar */
}

.nav-items {
  margin: 0 20px;
  display: flex;
  gap: 20px;
  font-family: 'Apple Chancery', cursive;
  font-size: 16px; /* Adjust font size as needed */
}

.nav-items .q-btn {
  color: orange;
}

body.body--dark {
  background: #000;
}
</style>

