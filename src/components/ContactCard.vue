<template>
  <a :href="link" class="contact-card" target="_blank" rel="noopener">
    <span class="icon">
      <Mail v-if="icon === 'email'" :size="28" />
      <Globe v-else-if="icon === 'site'" :size="28" />
      <Linkedin v-else-if="icon === 'linkedin'" :size="28" />
      <Github v-else-if="icon === 'github'" :size="28" />
    </span>
    <div class="contact-info">
      <span class="contact-title">{{ title }}</span>
      <span class="contact-subtitle">{{ subtitle }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import { Mail, Globe, Linkedin, Github } from 'lucide-vue-next';

defineProps<{
  icon: 'email' | 'site' | 'linkedin' | 'github';
  title: string;
  subtitle: string;
  link: string;
}>();
</script>

<style scoped>
.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  width: 100%;
  max-width: 400px;
  text-decoration: none;
  color: inherit;
  margin-bottom: 1.2rem;
  transition: box-shadow 0.2s;
}

.contact-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
}

.dark-theme .contact-card {
  background: #23272b;
  color: #eee;
}

.icon :deep(svg) {
  vertical-align: middle;
  color: #222; /* preto no light mode */
}

.dark-theme .icon :deep(svg) {
  color: #fff; /* branco no dark mode */
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.1rem;
}

.contact-subtitle {
  font-size: 0.98rem;
  opacity: 0.8;
}
</style>