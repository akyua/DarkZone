<template>
  <div class="articles-view-container">
    <main class="articles-list">
      <section v-for="(articles, groupName) in groupedArticles" :key="groupName" class="articles-group">
        <h2 :id="generateId(groupName as string)" class="group-title">{{ groupName }}</h2>
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
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
import { mockArticles, type Article } from '@/mocks/articles';
import ArticleCard from '@/components/ArticleCard.vue';
import TimelineSidebar from '@/components/TimelineSidebar.vue';

const articles: Article[] = mockArticles;

const generateId = (groupName: string) => {
  return groupName.toLowerCase().replace(/\s+/g, '-');
};

const groupedArticles = computed(() => {
  const groups: Record<string, Article[]> = {};

  articles.forEach(article => {
    const date = new Date(article.date);
    const groupName = date.toLocaleString('pt-BR', { year: 'numeric', month: 'long' });
    const capitalizedGroupName = groupName.charAt(0).toUpperCase() + groupName.slice(1);

    if (!groups[capitalizedGroupName]) {
      groups[capitalizedGroupName] = [];
    }
    groups[capitalizedGroupName].push(article);
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
  grid-template-columns: minmax(0, 3fr) 1fr;
  gap: 2rem;
  padding: 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
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
</style>