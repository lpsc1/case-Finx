<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="filterContainer">
    <p class="flexBox">Filtre por:</p>
    <div class="flexBox">
      <div class="flexBox">
        <p>Médico:</p>
        <input />
      </div>
      <div class="flexBox">
        <p>Paciente:</p>
        <input />
      </div>
      <button>Pesquisar</button>
    </div>
  </div>
</template>

<style scoped>

.filterContainer {
    
}

.flexBox {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
