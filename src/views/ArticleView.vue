<template>
  <div class="article-view-container">
    <div class="article-main">
      <h1 class="article-title">{{ article.title }}</h1>
      <div class="article-meta">
        <span class="author">{{ article.author }}</span>
        <span>-</span>
        <span class="date">{{ formatDate(article.date) }}</span>
      </div>
      <div ref="contentRef" class="article-content">
        <Component :is="content" />
      </div>
    </div>
    <TimelineSidebar v-if="headings.length" :groups="headings" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, markRaw } from 'vue';
import { useRoute } from 'vue-router';
import TimelineSidebar from '@/components/TimelineSidebar.vue';

const route = useRoute();
const slug = route.params.slug as string;

const postModules = import.meta.glob('@/posts/*.md', { eager: true });

const article = ref<any>({});
const content = ref();
const contentRef = ref<HTMLElement | null>(null);
const headings = ref<{ id: string, text: string }[]>([]);
const headingsReady = ref(false);

for (const path in postModules) {
  const mod = postModules[path] as any;
  if (mod.slug === slug) {
    article.value = {
      title: mod.title,
      author: mod.author,
      date: mod.date,
    };
    content.value = markRaw(mod.default);
    break;
  }
}

function formatDate(dateStr: string) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return date.toLocaleDateString('pt-BR');
}

// Extrai os títulos após o conteúdo ser renderizado
onMounted(async () => {
  await nextTick();
  if (contentRef.value) {
    const nodes = contentRef.value.querySelectorAll('h1, h2, h3');
    headings.value = Array.from(nodes).map((el, idx) => {
      let id = el.id || `heading-${idx}`;
      el.id = id;
      return { id, text: el.textContent || '' };
    });
  }
});
</script>

<style scoped>
.article-view-container {
  display: grid;
  grid-template-columns: 1fr minmax(0, 700px) 320px;
  gap: 0 3rem;
  padding: 3rem 0;
  max-width: 1400px;
  margin: 0 auto;
}

.article-main {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article-title {
  text-align: center;
  font-weight: bold;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.article-meta {
  text-align: center;
  color: #888;
  font-size: 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.article-meta .author,
.article-meta .date {
  font-weight: 400;
}

.article-content {
  font-size: 1.15rem;
  line-height: 1.7;
  width: 100%;
  max-width: 700px;
}

.timeline-sidebar {
  grid-column: 3;
}
</style>