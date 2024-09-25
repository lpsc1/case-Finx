<script setup>
import { ref } from "vue";
import Filter from "./components/Filter.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <header>
    <h1>Solicitações cirúrgicas</h1>
    <div>
      <Filter />
    </div>
  </header>

  <main></main>
</template>



<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 2rem 0;
  place-items: center;
}

header h1 {
  font-weight: 600;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
}
</style>
