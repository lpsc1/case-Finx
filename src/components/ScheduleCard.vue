<script setup>
import { ref } from "vue";
import { formatDateToBR, calculateAge } from "../utils/formatDate";

defineProps({
  schedule: {
    type: Object,
  },
});
</script>

<template>
  <div class="scheduleCardContainer">
    <p class="title">Médico</p>
    <p>
      {{ schedule.medico.nome }}
    </p>
    <div class="clientBox">
      <p class="title">Paciente</p>
      <p>{{ schedule.paciente.nome }}</p>
      <p>
        {{ calculateAge(schedule.paciente.dataNascimento) }}
        {{
          calculateAge(schedule.paciente.dataNascimento) > 1 ? "anos" : "ano"
        }}
      </p>
    </div>
    <p class="title">Data de criação</p>
    <p>{{ formatDateToBR(schedule.dataCriacao) }}</p>
  </div>
</template>

<style scoped>
.scheduleCardContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid var(--color-text);
  border-radius: 6px;
  font-size: 20px;
  font-weight: 500;
  background: var(--color-text);
  color: var(--primary);
}

.title {
  font-size: 25px;
  font-weight: 800;
}

.clientBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: linear-gradient(310deg, var(--primary) 60%, var(--secondary));
  color: var(--color-text);
  margin-block: 1rem;
}
</style>