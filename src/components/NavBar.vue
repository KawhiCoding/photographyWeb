<script setup lang="ts">
</script>

<template>
    <div>
      <nav class="nav-items">
        <router-link to="/HomePage"><q-btn label="Home" no-caps /></router-link>
        <router-link to="/GalleriesPage"><q-btn label="Galleries" no-caps/></router-link>
        <router-link to="/HomePage"><q-btn class='title'> Jibril photography </q-btn></router-link>
        <router-link to="/AboutPage"><q-btn label="About" no-caps/></router-link>
        <router-link to="/ConnectPage"><q-btn label="Connect" no-caps/></router-link>
      </nav>
    </div>
</template>
  
<style scoped>
.nav-items {
    margin: 0px;
    display: flex;
    gap: 20px;
    font-family: Apple Chancery;
    
}

.nav-items .q-btn {
    color: orange;
    font-size:medium;
}

.title {
    font-size: 20px; /* Make the text larger */
    font-family: Avenir; /* Use a fancy font */
    color: orange; /* Ensure the color matches other buttons */
}
</style>
  