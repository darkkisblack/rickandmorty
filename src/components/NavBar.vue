<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'MainPage' }">
        <img src="../assets/logo.png" alt="Home" width="45" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Heroes' }"
              >Heroes</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Location' }"
              >Location</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/Episodes' }"
              >Episodios</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
nav.navbar.navbar-dark {
  background-color: #18192b;
}
nav.navbar.navbar-dark a.nav-link {
  text-transform: capitalize;
  color: #0faebf;
}
nav.navbar.navbar-dark a.nav-link:hover,
.router-link-exact-active.router-link-active {
  color: #41a632;
}
</style>
