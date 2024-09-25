<script setup>
import { ref } from "vue";
import Filter from "./components/Filter.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { ApiService } from "./service/index";

const schedulingData = ref(null)

async function searchData(doctor, client) {
  console.log("doctor", doctor);
  console.log("client", client);
  ApiService.scheduling.getAll(doctor, client).then((res) => {
    schedulingData.value = res
  });
}
</script>

<template>
  <header>
    <h1>Solicitações cirúrgicas</h1>
    <div>
      <Filter :onSearch="searchData" />
    </div>
  </header>

  <main>
  </main>
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
