<script setup>
import { ref } from "vue";
import Filter from "./components/Filter.vue";
import OrderBy from "./components/OrderBy.vue";
import Pagination from "./components/Pagination.vue";
import SchedulingList from "./components/SchedulingList.vue";
import { ApiService } from "./service/index";

const schedulingData = ref(null);
const searchPayload = ref({
  doctor: "",
  client: "",
  orderBy: false,
});
const paginationProps = ref({
  page: 1,
  perPage: 10,
  next: null,
  prev: null,
  last: null,
  items: null,
});

async function fecthSchedulingData() {
  ApiService.scheduling
    .getAll(paginationProps.value, searchPayload.value)
    .then((res) => {
      schedulingData.value = res?.data;
      paginationProps.value = {
        ...paginationProps.value,
        last: res.last,
        next: res.next,
        prev: res.prev,
        items: res.items,
      };
    });
}

function onSearchScheduling(props) {
  searchPayload.value = {
    ...searchPayload.value,
    client: props.client,
    doctor: props.doctor,
  };
  fecthSchedulingData();
}

function onOrderBy(orderBy) {
  searchPayload.value = {
    ...searchPayload.value,
    orderBy: orderBy,
  };
  fecthSchedulingData();
}

function onChangePage(page) {
  paginationProps.value = {
    ...paginationProps.value,
    page,
  };
  fecthSchedulingData();
}
function onChangePerPage(perPage) {
  paginationProps.value = {
    ...paginationProps.value,
    perPage: perPage.target.value,
  };
  fecthSchedulingData();
}
</script>

<template>
  <header>
    <h1>Agendamentos cirúrgicos</h1>
    <div>
      <Filter :onSearch="onSearchScheduling" />
    </div>
  </header>

  <main>
    <div v-if="schedulingData?.length > 0" class="orderByBox">
      <OrderBy :onOrderBy="onOrderBy" :orderBy="searchPayload.orderBy" />
      <Pagination
        :paginationProps="paginationProps"
        :onChangePage="onChangePage"
        :onChangePerPage="onChangePerPage"
      />
    </div>
    <SchedulingList
      :schedulingData="schedulingData"
      :paginationProps="paginationProps"
      :onChangePage="onChangePage"
    />
  </main>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 1rem 0;
  place-items: center;
}

main {
  border-top: 1px solid var(--color-text);
}

header h1 {
  font-weight: 600;
  margin-bottom: 1rem;
}

.orderByBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

/* Mobile */
@media (max-width: 700px) {
  .orderByBox {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
