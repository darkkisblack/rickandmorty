<template>
  <div class="container py-3 shadow rounded">
    <div class="row my-3 mx-auto">
      <div class="col-lg-8">
        <div class="tab-content pb-3">
          <div class="tab-pane active" :id="character.id">
            <div class="row shadow rounded bg-blue my-5 p-3">
              <div class="col-md-12 p-0">
                <h3>{{ character.name }}</h3>
                <hr class="long" />
              </div>
              <div class="col-md-6">
                <h6>Статус</h6>
                <p>{{ character.status }}</p>
                <hr class="short" />
                <h6>Вид</h6>
                <p>{{ character.species }}</p>
              </div>
              <div class="col-md-6">
                <h6>Пол</h6>
                <p>{{ character.gender }}</p>
                <hr class="short" />
                <h6>Название</h6>
                <router-link :to="{ path: `/location/${originId[0]}` }">
                  {{ character.origin.name }}
                </router-link>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 shadow rounded bg-blue p-3">
                <h5 class="mt-2">Список эпизодов</h5>
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr v-for="episode in episodes" :key="episode">
                      <td>
                        <router-link :to="{ path: `/episode/${episode.id}` }">
                          {{ episode.name }}
                        </router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mt-2 text-sm-center">
        <img
          :src="character.image"
          class="mx-auto img-fluid shadow-lg rounded"
          alt="avatar"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "character",
  data() {
    return {
      url: "https://rickandmortyapi.com/api",
      id: window.location.pathname,
      character: {},
      episodes: [],
      originId: 1,
    };
  },
  created() {
    this.fetchCharacter();
  },
  methods: {
    fetchCharacter() {
      fetch(this.url + this.id)
        .then((res) => res.json())
        .then((res) => {
          this.character = res;
          res.episode.forEach((element) => {
            const extractEpisode = /\/\bepisode\b\/\d+$/.exec(element);
            this.fetchEpisode(extractEpisode);
          });
          this.originId = /\d+$/.exec(res.origin.url);
        })
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    },
    fetchEpisode(episodePath) {
      fetch(this.url + episodePath)
        .then((res) => res.json())
        .then((res) => this.episodes.push(res))
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
a {
  color: #9fbf2a;
}
hr.short {
  max-width: 3em;
}
.container {
  background-color: #0c97a7;
}
.bg-blue {
  background-color: #0faebf;
}
</style>
