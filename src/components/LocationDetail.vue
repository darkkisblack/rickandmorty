<template>
  <div class="container py-3">
    <div class="row shadow rounded bg-blue my-3 mx-auto p-3">
      <div class="col-md-12 p-0">
        <h3>Название: {{ location.name }}</h3>
        <hr class="long" />
      </div>
      <div class="col-md-6">
        <p>Тип: {{ location.type }}</p>
      </div>
      <div class="col-md-6">
        <p>Измерение: {{ location.dimension }}</p>
      </div>

      <div class="row mx-auto col-md-8 my-3">
        <div class="col-md-12 shadow rounded bg-lightblue p-3">
          <h5 class="mt-2">Жители</h5>
          <table class="table table-hover table-striped">
            <tbody>
              <tr v-for="resident in residents" :key="resident.id">
                <td>
                  <router-link :to="{ path: `/character/${resident.id}` }">
                    {{ resident.name }}
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "location",
  data() {
    return {
      url: "https://rickandmortyapi.com/api",
      id: window.location.pathname,
      location: {},
      residents: [],
    };
  },
  created() {
    this.fetchLocation();
  },
  methods: {
    fetchLocation() {
      fetch(this.url + this.id)
        .then((res) => res.json())
        .then((res) => {
          this.location = res;
          res.residents.forEach((element) => {
            const extractCharacter = /\/\bcharacter\b\/\d+$/.exec(element);
            this.fetchResident(extractCharacter);
          });
        })
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    },
    fetchResident(characterPath) {
      fetch(this.url + characterPath)
        .then((res) => res.json())
        .then((res) => this.residents.push(res))
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.bg-blue {
  background-color: #0c97a7;
}
.bg-lightblue {
  background-color: #0faebf;
}
.card .list-group.list-group-flush .list-group-item {
  background-color: #0faebf;
  border-color: #18192b;
}
td a {
  color: #9fbf2a;
}
</style>
