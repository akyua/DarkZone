<template>
  <div class="articles-view-container">
    <main class="articles-list">
      <section v-for="(articles, groupName) in groupedArticles" :key="groupName" class="articles-group">
        <h2 :id="generateId(groupName as string)" class="group-title">{{ groupName }}</h2>
        <hr class="group-divider" />
        <ArticleCard
          v-for="article in articles"
          :key="article.slug" 
          :title="article.title"
          :to="`/articles/${article.slug}`"
          :logo="article.logo"
          :author="article.author"  
          :date="article.date"     
        />
      </section>
    </main>
    <TimelineSidebar v-if="timelineGroups.length" :groups="timelineGroups" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ArticleCard from '@/components/ArticleCard.vue';
import TimelineSidebar from '@/components/TimelineSidebar.vue';

interface Article {
  title: string;
  slug: string;
  date: string;
  logo?: string;
  author: string;
}

const postModules = import.meta.glob('@/posts/*.md', { eager: true });

const articles: Article[] = Object.values(postModules)
  .map((module: any) => ({
    title: module.title,
    slug: module.slug,
    date: module.date,
    logo: module.logo,
    author: module.author,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const generateId = (groupName: string) => {
  return groupName.toLowerCase().replace(/\s+/g, '-');
};

const groupedArticles = computed(() => {
  const groups: Record<string, Article[]> = {};

  articles.forEach(article => {
  const date = new Date(article.date);
  if (isNaN(date.getTime())) {
    return;
  }
  const year = date.getFullYear();
  const month = date.toLocaleString('pt-BR', { month: 'long' });
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const groupName = `${year} - ${capitalizedMonth}`;

  if (!groups[groupName]) {
    groups[groupName] = [];
  }
  groups[groupName].push(article);
});

  return groups;
});

const timelineGroups = computed(() => {
  return Object.keys(groupedArticles.value);
});

</script>

<style lang="scss" scoped>
.articles-view-container {
  display: grid;
  grid-template-columns: 1fr minmax(0, 700px) 320px;
  gap: 0 3rem;
  padding: 3rem 0;
  max-width: 1400px;
  margin: 0 auto;
}

.articles-list {
  grid-column: 2;
}

.timeline-sidebar {
  grid-column: 3;
}

.articles-group {
  margin-bottom: 3rem;
}

.group-title {
  color: var(--text-color);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  scroll-margin-top: 2rem;
}

.group-divider {
  border: none;
  border-top: 1px solid var(--header-border-color, #e0e0e0);
  margin: -1rem 0 2rem 0;
}
</style>