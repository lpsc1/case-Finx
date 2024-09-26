<script setup>
import { ref } from "vue";
import ScheduleCard from "./ScheduleCard.vue";

defineProps({
  schedulingData: {
    type: Array,
  },
});
const active = ref("");

function onOrderBy(sort) {
  if (sort === active.value) {
    return (active.value = "");
  }
  active.value = sort;
}
</script>

<template>
  <div class="schedulingContainer">
    <div v-if="schedulingData?.length > 0" class="orderByBox">
      <p>Ordenar por:</p>
      <button
        class="orderByButton"
        :class="{ active: active === 'f1' }"
        @click="onOrderBy('f1')"
      >
        Asc
      </button>
      <button
        class="orderByButton"
        :class="{ active: active === 'f2' }"
        @click="onOrderBy('f2')"
      >
        Dec
      </button>
    </div>
    <div v-if="schedulingData?.length === 0" class="noContent">
      <p>Nenhum resultado encontrado!</p>
    </div>
    <div class="listGrid">
      <div :key="schedule.id" v-for="schedule in schedulingData">
        <ScheduleCard :schedule="schedule" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.schedulingContainer {
  width: 100%;
  padding: 1rem;
  border-top: 1px solid var(--color-text);
}
.orderByBox {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.active {
  background: var(--color-text);
  color: var(--primary);
}

.noContent {
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
}

.listGrid {
  /* display: flex;
  flex-direction: row;
  height: 55vh;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  gap: 2rem; */
  margin-top: 2rem;
  height: 55vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>