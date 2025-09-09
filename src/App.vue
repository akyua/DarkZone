<template>
  <div class="app-layout">
    <HeaderComponent :articles="articles" /> 
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import Footer from '@/components/Footer.vue';
import { articles } from '@/data/articles';

</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>