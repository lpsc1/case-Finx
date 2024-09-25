<script setup>
import { ref } from "vue";
import Filter from "./components/Filter.vue";
import TheWelcome from "./components/TheWelcome.vue";

const show = ref(false);

function toggleShow() {
  console.log("oi");
  show.value = !show.value;
}
</script>

<template>
  <header>
    <h1>Solicitações cirúrgicas</h1>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <button @click="toggleShow">Toggle</button>
      <p>Opa</p>
    </div> -->
    <Filter />
  </header>

  <main>
    <!-- <TheWelcome /> -->
  </main>
</template>



<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: max-content;
  padding: 2rem 0;
}

header h1 {
  font-weight: 600;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
}
</style>
