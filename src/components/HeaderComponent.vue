<template>
  <header class="main-header">
    <RouterLink to="/"class="title-link">
      <h1>DarkZone</h1>
    </RouterLink>
    <div class="header-right">
      <nav class="main-nav">
        <ul>
          <li><RouterLink to="/about">Sobre</RouterLink></li>
          <li><RouterLink to="/contact">Contato</RouterLink></li>
        </ul>
      </nav>

      <div class="search-filter">
        <input type="text" placeholder="Pesquisar...">
      </div>
      <ThemeToggle />
    </div>
  </header>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue'
export default {
  name: 'HeaderComponent',
  components: {
    ThemeToggle 
  }
}
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--header-border-color);
  //transition: background-color 0.3s ease, border-color 0.3s ease;  talvez de para usar depois, mas teria que sincronizar com as paginas view tbm
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

.search-filter input {
  padding: 4px 12px;
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
</style>