<template>
  <RouterLink :to="to" class="article-card">
    <div class="logo-container">
      <img v-if="logo" :src="logo" :alt="`logo`" class="logo">
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="logo"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
    </div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="meta-info">{{ author }}, {{ formattedDate }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  to: string;
  logo?: string;
  author: string; // <-- ADICIONADO
  date: string;   // <-- ADICIONADO
}>();

// Computed property para formatar a data
const formattedDate = computed(() => {
  if (!props.date) return '';
  const [year, month, day] = props.date.split('-');
  return `${day}/${month}/${year}`;
});
</script>

<style lang="scss" scoped>
.article-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  background-color: var(--header-bg-color);
  border: 1px solid var(--header-border-color);
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
}

.logo-container {
  flex-shrink: 0;
  .logo {
    width: 32px;
    height: 32px;
    color: var(--text-color);
  }
}

// O container do conteúdo agora é o item flex que cresce
.content {
  flex-grow: 1;
}

.title {
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

// Estilo para as novas informações
.meta-info {
  font-size: 0.85rem;
  color: var(--text-color);
  opacity: 0.7; // Cor mais suave para dar hierarquia
  margin: 0.25rem 0 0 0; // Pequeno espaço acima
}

.dark-theme .article-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}
</style>