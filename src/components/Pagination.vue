<script setup>
import { ref } from "vue";
import ScheduleCard from "./ScheduleCard.vue";

defineProps({
  onChangePage: {
    type: Function,
  },
  onChangePerPage: {
    type: Function,
  },
  paginationProps: {
    type: Object,
  },
});
</script>

<template>
  <div>
    Itens por página
    <select v-model="paginationProps.perPage" @change="event => onChangePerPage(event.target.value)">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="25">25</option>
    </select>
  </div>
  <div v-if="paginationProps.last !== 1" class="flexBox">
    <p
      v-if="paginationProps.page !== 1"
      class="paginationText"
      @click="onChangePage(paginationProps.page - 1)"
    >
      Anterior
    </p>
    <button
      :class="{ active: paginationProps.page === 1 }"
      class="paginationItem"
      @click="onChangePage(1)"
    >
      1
    </button>
    <button
      v-if="
        paginationProps.page !== 1 &&
        paginationProps.page !== paginationProps.last
      "
      class="paginationItem active"
    >
      {{ paginationProps.page }}
    </button>
    <p>...</p>
    <button
      :class="{ active: paginationProps.page === paginationProps.last }"
      class="paginationItem"
      @click="onChangePage(paginationProps.last)"
    >
      {{ paginationProps.last }}
    </button>
    <p
      v-if="paginationProps.page < paginationProps.last"
      class="paginationText"
      @click="onChangePage(paginationProps.page + 1)"
    >
      Próximo
    </p>
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

.paginationItem {
  min-width: 2rem;
  height: 2rem;
  padding: 0.3rem;
}

.paginationText {
  text-decoration-line: underline;
  cursor: pointer;
}

.paginationText:hover {
  transform: scale(1.03);
  transition: 0.2s;
}
</style>