<template>
  <div class="row justify-content-center">
    <!-- <form class="d-flex justify-content-center mt-3 ml-25">
      <input
        class="form-control me-2 w-25"
        type="search"
        placeholder="Введите имя персонажа"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">Искать</button>
    </form> -->
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Введите имя персонажа" />
      <label>Search title:</label>
    </div>
    <div
      v-for="item of filteredList"
      :key="item.id"
      class="shadow card col-10 col-md-6 col-lg-5 m-3 p-0"
    >
      <div class="row no-gutters">
        <div class="col-md-4 align-self-center">
          <img :src="item.image" class="card-img" :alt="item.name" />
        </div>
        <div class="col-md-8">
          <div class="card-header pb-0">
            <h5 class="card-title">{{ item.name }}</h5>
          </div>
          <div class="card-body pb-0">
            <h6 class="card-text m-0">Вид: {{ item.species }}</h6>
            <h6 class="card-text m-0">Статус: {{ item.status }}</h6>

            <router-link
              class="shadow btn btn-success btn-sm mt-5"
              :to="{ path: `/character/${item.id}` }"
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
  name: "characters",
  components: { Pagination },
  data() {
    return {
      search: "",
      items: [],
      url: "https://rickandmortyapi.com/api/character/?page=",
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
div.card {
  background-color: #9fbf2a;
}
.card-body .btn.btn-sm {
  background-color: #0faebf;
  color: #18192b;
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
