<!-- layouts/default.vue -->
<template>
  <div>
    <header>
      <!-- Cabeçalho do site -->
      <h1>Meu Site</h1>
    </header>
    <main>
      <NuxtPage /> <!-- Renderiza a página atual -->
    </main>
    <footer>
      <!-- Rodapé do site -->
      <p>&copy; 2024 Meu Site</p>
    </footer>
  </div>
</template>

<script setup>
// Adicione qualquer lógica específica para o layout aqui, se necessário
</script>

<style scoped>
/* Adicione estilos específicos para o layout aqui */
header {
  background: #f0f0f0;
  padding: 1rem;
}

footer {
  background: #f0f0f0;
  padding: 1rem;
  text-align: center;
}
</style>
