<template>
  <aside class="timeline-sidebar">
    <h4>Nesta Página</h4>
    <ul>
      <li v-for="group in groups" :key="group">
        <a :href="`#${generateId(group)}`">{{ group }}</a>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  groups: string[];
}>();

const generateId = (groupName: string) => {
  return groupName.toLowerCase().replace(/\s+/g, '-');
};
</script>

<style lang="scss" scoped>
.timeline-sidebar {
  position: sticky;
  top: 2rem;
  padding-left: 2rem;

  h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    color: var(--text-color);
    opacity: 0.7;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-left: 1px solid var(--header-border-color);
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    display: block;
    padding: 0.25rem 1rem;
    color: var(--text-color);
    opacity: 0.8;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s ease;

    &:hover {
      opacity: 1;
      transform: translateX(4px);
    }
  }
}
</style>