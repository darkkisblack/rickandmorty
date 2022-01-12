<template>
  <div class="row d-flex justify-content-center mx-auto">
    <!-- <form class="d-flex justify-content-center mt-3 ml-25">
      <input
        class="form-control me-2 w-25"
        type="search"
        placeholder="Введите название планеты"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">Искать</button>
    </form> -->
    <div class="search-wrapper">
      <input
        type="text"
        v-model="search"
        placeholder="Введите название планеты"
      />
      <label>Search title:</label>
    </div>
    <div
      v-for="item in filteredList"
      :key="item.id"
      class="shadow card border-success d-flex m-3 w-50"
    >
      <div class="card-header bg-transparent border-success">
        <h4>Название:</h4>
        {{ item.name }}
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
        class="btn btn-success btn-episode btn-sm mt-3 m-auto w-25"
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
      search: "",
      items: [],
      url: "https://rickandmortyapi.com/api/location/?page=",
      page: 1,
      info: {},
    };
  },
  computed: {
    filteredList() {
      return this.items.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
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

<style lang="scss" scoped>
div.card.border-success {
  min-width: 18rem;
}
.search-wrapper {
  position: relative;
  label {
    position: absolute;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.5);
    top: 8px;
    left: 12px;
    z-index: -1;
    transition: 0.15s all ease-in-out;
  }
  input {
    margin-top: 10px;
    padding: 4px 70px;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    transition: 0.15s all ease-in-out;
    background: white;
    &:focus {
      outline: none;
      transform: scale(1.05);
      & + label {
        font-size: 10px;
        transform: translateY(-24px) translateX(-12px);
      }
    }
    &::-webkit-input-placeholder {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
      font-weight: 400;
    }
  }
}
</style>
