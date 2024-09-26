<script setup>
import { ref } from "vue";
import ScheduleCard from "./ScheduleCard.vue";

defineProps({
  orderBy: {
    type: Boolean,
  },
  onOrderBy: {
    type: Function,
  },
});
</script>

<template>
  <div class="flexBox">
    <p>Ordenar por:</p>
    <button
      class="orderByButton"
      :class="{ active: orderBy }"
      @click="onOrderBy(!orderBy)"
    >
      Mais recente
    </button>
  </div>
</template>

<style scoped>
.flexBox {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.active {
  background: var(--color-text);
  color: var(--primary);
}
</style>