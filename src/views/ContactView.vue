<template>
  <div class="contact-view-container">
    <h1>Contato</h1>
    <div class="contact-cards">
      <ContactCard
        icon="email"
        title="Email"
        subtitle="gabrielnovatoo@gmail.com"
        link="mailto:gabrielnovatoo@gmail.com"
      />
      <ContactCard
        icon="site"
        title="Site"
        subtitle="portfolio-akyua.vercel.app"
        link="https://portfolio-akyua.vercel.app/"
      />
      <ContactCard
        icon="linkedin"
        title="Linkedin"
        subtitle="Gabriel Henrique Silveira"
        link="https://linkedin.com/in/gabriel-hs"
      />
      <ContactCard
        icon="github"
        title="Github"
        subtitle="akyua"
        link="https://github.com/akyua"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactCard from '@/components/ContactCard.vue';
</script>

<style scoped>
.contact-view-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
}

.contact-view-container h1 {
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  text-align: center;
}

.contact-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}
</style>