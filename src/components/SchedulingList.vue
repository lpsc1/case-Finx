<script setup>
import { ref } from "vue";
import ScheduleCard from "./ScheduleCard.vue";

defineProps({
  schedulingData: {
    type: Array,
  },
});
</script>

<template>
  <div class="schedulingContainer">
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
}

.noContent {
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  margin-top: 2rem;
}

.listGrid {
  height: 60vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  padding-bottom: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>