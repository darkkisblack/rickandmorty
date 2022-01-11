<template>
  <div class="row justify-content-center mx-auto">
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Введите название планеты"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">Искать</button>
    </form>
    <div
      v-for="item in items"
      :key="item.id"
      class="shadow card border-success m-3"
    >
      <div class="card-header bg-transparent border-success">
        Название: {{ item.name }}
      </div>
      <div class="card-body text-success">
        <div class="row justify-content-center">
          <div class="col-5 px-0">
            <h5 class="card-title">ТИП:</h5>
            <p class="card-text">{{ item.type }}</p>
          </div>
          <div class="col-5 px-0">
            <h5 class="card-title">Измерение:</h5>
            <p class="card-text">{{ item.dimension }}</p>
          </div>
        </div>
      </div>
      <router-link
        class="btn btn-success btn-sm mt-3"
        :to="{ path: `/location/${item.id}` }"
      >
        Детальная информация
      </router-link>
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
  name: "Locations",
  components: { Pagination },
  data() {
    return {
      items: [],
      url: "https://rickandmortyapi.com/api/location/?page=",
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
div.card.border-success {
  min-width: 18rem;
}
</style>
