<template>
  <div class="about-view-container">
    <h1>Sobre</h1>
    <p>
      Eu sou Gabriel Silveira, desenvolvedor desde 2022 e atualmente graduando em Ciência da Computação.
    </p>
    <p>
      A ideia da criação deste blog é servir como fonte dos conteúdos que estudo, pois acredito que tentar explicar e ensinar seja o melhor jeito de aprender.
    </p>
    <p>
      O blog não é necessariamente só sobre programação. Possivelmente, devo compartilhar também práticas para melhorar o aprendizado e métodos que estou usando para aprender um novo idioma ou outras coisas que eu achar interessante.
    </p>
    <p>
      Se quiser entrar em contato comigo, pode me enviar um <a href="mailto:gabrielnovatoo@gmail.com" class="email-link">e-mail.</a>
    </p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-view-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
}

.about-view-container h1 {
  font-size: 2.2rem;
  margin-bottom: 3.0rem;
  text-align: center;
}

.about-view-container p {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.email-link {
  color: #1976d2;
  text-decoration: underline;
  font-weight: 500;
}
</style>
