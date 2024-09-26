<script setup>
import { ref } from "vue";

defineProps({
  onSearch: {
    type: Function,
  },
});
const doctor = ref("");
const client = ref("");
</script>

<template>
  <div class="filterContainer">
    <h3 class="flexBox title">Filtrar por:</h3>
    <div class="flexBox inputs">
      <div class="flexBox input-group">
        <p>Médico:</p>
        <input v-model="doctor" placeholder="Nome do médico" />
      </div>
      <div class="flexBox input-group">
        <p>Paciente:</p>
        <input v-model="client" placeholder="Nome do paciente" />
      </div>
    </div>
    <div class="flexBox search-button">
      <button
        @click="onSearch({ doctor: doctor.trim(), client: client.trim() })"
      >
        Pesquisar
      </button>
    </div>
  </div>
</template>

<style scoped>
.filterContainer {
  padding: 1rem 3rem;
  border-radius: 6px;
  border: 1px solid var(--color-text);
  font-size: 16px;
}

.flexBox {
  display: flex;
  align-items: center;
  justify-content: center;
}

.inputs {
  gap: 1rem;
}

.input-group {
  gap: 0.5rem;
}

.search-button {
  margin-top: 1rem;
}

.title {
  margin-bottom: 0.5rem;
  font-weight: 500;
}
</style>