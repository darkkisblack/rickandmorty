<template>
  <div class="row justify-content-center">
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Поиск по имени и статусу"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">Искать</button>
    </form>
    <div
      v-for="item of items"
      :key="item.id"
      class="shadow card col-10 col-md-6 col-lg-5 m-3 p-0"
    >
      <div class="row no-gutters">
        <div class="col-md-8">
          <div class="card-header pb-0">
            <h5 class="card-title">Название эпизода: {{ item.name }}</h5>
          </div>
          <div class="card-body pb-0">
            <p class="card-text m-0">Эпизод: {{ item.episode }}</p>
            <p class="card-text m-0">Дата релиза: {{ item.air_date }}</p>

            <router-link
              class="shadow btn btn-success btn-sm mt-3"
              :to="{ path: `/episode/${item.id}` }"
            >
              Детальная информация
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100"></div>

    <Pagination
      :page="page"
      :info="info"
      @fetchItems="fetchItems"
      @updatePage="updatePage"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Paginator.vue";
export default {
  name: "Episodes",
  components: { Pagination },
  data() {
    return {
      items: [],
      url: "https://rickandmortyapi.com/api/episode/?page=",
      page: 1,
      info: {},
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      fetch(this.url + this.page)
        .then((res) => res.json())
        .then((res) => {
          this.items = res.results;
          this.info = res.info;
        })
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    },
    updatePage(value) {
      this.page = value;
    },
  },
};
</script>

<style scoped>
div.card {
  background-color: #9fbf2a;
}
.card-body .btn.btn-sm {
  background-color: #0faebf;
  color: #18192b;
}
</style>
