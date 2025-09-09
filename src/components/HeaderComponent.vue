<template>
  <header class="main-header">
    <RouterLink to="/" class="title-link">
      <h1>DarkZone</h1>
    </RouterLink>
    <div class="header-right">
      <nav class="main-nav">
        <ul>
          <li><RouterLink to="/about">Sobre</RouterLink></li>
          <li><RouterLink to="/contact">Contato</RouterLink></li>
        </ul>
      </nav>

      <div class="search-filter" ref="searchContainer">
        <div class="search-input-wrapper">
          <input
            type="text"
            placeholder="Pesquisar..."
            v-model="localSearch"
            @input="onInput"
          >
          <button
            v-if="localSearch"
            @click="clearSearch"
            class="clear-search-button"
            aria-label="Limpar pesquisa"
          >
            &times;
          </button>
        </div>
        <div v-if="showResults && filteredArticles.length" class="search-results">
          <ul>
            <li v-for="article in filteredArticles" :key="article.slug">
              <template v-if="article.category">
                <span class="result-secondary-title">{{ article.category }}</span>
                <hr class="secondary-title-divider">
              </template>
              
              <RouterLink :to="`/articles/${article.slug}`" @click="showResults = false" class="search-result-link">
                <div class="result-item">
                  <span class="result-main-title">{{ article.title }}</span>
                  <div class="result-meta">
                    <span class="result-author">{{ article.author }}</span>
                    <span class="result-date">{{ article.date }}</span>
                  </div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <ThemeToggle />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import ThemeToggle from './ThemeToggle.vue';

const searchContainer = ref<HTMLElement | null>(null);

const emit = defineEmits(['search']);
const localSearch = ref('');
const showResults = ref(false);

interface Article {
  title: string;
  slug: string;
  author: string;
  date: string; 
  category?: string;
}
const props = defineProps<{ articles: Article[] }>();

function onInput() {
  emit('search', localSearch.value);
  showResults.value = !!localSearch.value;
}

// Nova função para limpar a busca
function clearSearch() {
  localSearch.value = '';
  showResults.value = false;
  emit('search', '');
}

const filteredArticles = computed(() => {
  if (!localSearch.value) return [];
  const term = localSearch.value.toLowerCase();
  return props.articles.filter(article =>
    article.title.toLowerCase().includes(term)
  );
});

function handleClickOutside(event: MouseEvent) {
  if (searchContainer.value && !searchContainer.value.contains(event.target as Node)) {
    showResults.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--header-border-color);
}

.title-link {
  text-decoration: none;
  h1 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--text-color);
    user-select: none;
    pointer-events: none;
  }
}

.header-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.main-nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

.main-nav a {
  text-decoration: none;
  color: var(--link-color);
  font-weight: 500;
  &:hover {
    color: var(--link-hover-color);
  }
}

.search-filter {
  position: relative;
  display: inline-block;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input-wrapper input {
  padding: 4px 12px;
  padding-right: 32px;
  border-radius: 6px;
  border: 1px solid var(--input-border-color);
  background-color: var(--input-bg-color);
  color: var(--text-color);
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: var(--link-hover-color);
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
}

.clear-search-button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  opacity: 0.6;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
}

.search-results {
  position: absolute;
  right: 0;
  top: 100%;
  background: var(--search-bg-color);
  border: 1px solid var(--search-border-color);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  width: 400px;
  z-index: 100;
  padding: 0.5rem 0;
  font-size: 1rem;
  max-height: 60vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.search-results ul {
  list-style: none;
  margin: 0;
  padding: 0 0.5rem;
}

.search-results li {
  margin: 0;
  padding: 0;
  border-radius: 0;
  margin-bottom: 0.8rem;
}

.search-results li:last-child {
  margin-bottom: 0;
}

/* Novo seletor para o link clicável */
.search-result-link {
  display: block;
  text-decoration: none;
  color: var(--text-color);
  padding: 0.7rem 0.5rem;
  border-radius: 8px;
  transition: background 0.15s ease;
  cursor: pointer;
}

/* Aplica o hover apenas na área do link */
.search-result-link:hover {
  background: var(--search-hover-color);
}

.result-item {
  display: flex;
  flex-direction: column;
}

.result-secondary-title {
  display: block; 
  font-size: 0.8em;
  font-weight: 500;
  color: var(--text-color);
  opacity: 0.8;
  text-transform: uppercase;
  margin: 2px 0.5rem; /* Margem lateral */
  margin-bottom: 0.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.05em;
}

.secondary-title-divider {
  border: none;
  border-top: 1px solid var(--search-border-color);
  width: auto;
}

.result-main-title {
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--text-color);
  margin-bottom: 0.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.result-meta {
  display: flex;
  gap: 0.5rem;
  font-size: 0.85em;
  color: var(--text-color);
  opacity: 0.6;
}
</style>