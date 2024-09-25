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
    <h3 class="flexBox title">Se quiser, filtre por:</h3>
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
      <button @click="onSearch(doctor.trim(), client.trim())">Pesquisar</button>
    </div>
  </div>
</template>

<style scoped>
.filterContainer {
  padding: 1rem 3rem;
  border-radius: 6px;
  border: 2px solid white;
  font-size: 16px;
}

input {
  border: 1px solid white;
  border-radius: 6px;
  color: white;
  background: transparent;
  padding: 0.3rem 1rem;
  min-width: 200px;
}

input::placeholder {
  color: white;
  opacity: .6;
}

input:focus {
  outline: none;
  border: 2px solid white;
  font-size: 14px;
  font-weight: 500;
}

button {
  padding: 0.5rem 1rem;
  color: white;
  background: transparent;
  border: 2px solid white;
  font-weight: 600;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
}

button:hover {
  transform: scale(1.05);
  transition: 0.1s linear;
  color: #03a5ed;
  background: white;
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