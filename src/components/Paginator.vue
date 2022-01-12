<template>
  <nav role="navegation" aria-label="pagination">
    <ul class="pagination">
      <li v-show="info.prev != ''" class="page-item">
        <a class="page-link" @click="changePage(page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link">{{ page }} из {{ info.pages }} </a>
      </li>
      <li v-show="info.next != ''" class="page-item">
        <a class="page-link" @click="changePage(page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Paginator",
  props: ["page", "info"],
  methods: {
    changePage(page) {
      this.$emit("updatePage", page);
      this.$emit("fetchItems");
    },
  },
};
</script>

<style>
.page-item {
  cursor: pointer;
}
</style>
