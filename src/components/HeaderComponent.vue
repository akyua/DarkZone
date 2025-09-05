<template>
  <header class="main-header">
    <RouterLink to="/"class="title-link">
      <h1>DarkZone</h1>
    </RouterLink>
    <div class="header-right">
      <nav class="main-nav">
        <ul>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>

      <div class="search-filter">
        <input type="text" placeholder="Search...">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.title-link {
  text-decoration: none;
  h1{
    margin: 0;
    font-size: 1.5rem;
    color: #333;
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
  color: #333;
  font-weight: 500;
}

.search-filter input {
  padding: 4px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff; 
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
}
</style>