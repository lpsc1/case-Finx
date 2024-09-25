<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="filterContainer">
    <h3 class="flexBox" style="margin-bottom: 0.5rem; font-weight: 500;">Se quiser, filtre por:</h3>
    <div class="flexBox" style="gap: 1rem;">
      <div class="flexBox" style="gap: .5rem;">
        <p>Médico:</p>
        <input />
      </div>
      <div class="flexBox" style="gap: .5rem;">
        <p>Paciente:</p>
        <input />
      </div>
    </div>
    <div class="flexBox" style="margin-top: 1rem;">
      <button>Pesquisar</button>
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
  padding: .3rem 1rem;
 }

 input:focus {
  outline: none;
  border: 2px solid white;
  font-size: 14px;
  font-weight: 500;
 }

 button {
  padding: .5rem 1rem;
  color: white;
  background: transparent ;
  border: 2px solid white;
  font-weight: 600;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
}

button:hover {
  transform: scale(1.05);
  transition: .1s linear;
  color: #03a5ed;
  background: white;
 }

.flexBox {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
