<template>
  <footer class="main-footer">
    <span>&copy; {{ currentYear }} Gabriel Silveira. All Rights Reserved.</span>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.main-footer {
  width: 100%;
  padding: 1.2rem 0;
  text-align: center;
  font-size: 1rem;
  color: #444;
  background-color: #f2f2f2; 
  border-top: 1px solid #e0e0e0;
}

.dark-theme .main-footer {
  background-color: #23272b;
  color: #ccc;
  border-top: 1px solid #333;
}
</style>