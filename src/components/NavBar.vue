<template>
  <div>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" @click="homeRoute">Home</a>
          <a class="navbar-item" @click="resumeRoute">Resume</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Cooking</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" @click="recipeRoute">Recipes</a>
              <a class="navbar-item">Thoughts</a>
              <a class="navbar-item" v-if="this.$store.state.hasAuth">Add recipes</a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Rent Burdening</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" @click="rentRoute">Visualization</a>
              <a class="navbar-item">Update</a>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light" @click="goToLogin">
            Log in
          </a>
        </div>
      </div>
    </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    goToLogin(){
      this.$store.state.route !== "login" ? this.$router.push("/Login") : "";
      this.$store.commit("changeRoute", "login");
    },
    homeRoute() {
      this.$store.state.route !== "home" ? this.$router.push("/") : "";
      this.$store.commit("changeRoute", "home");
    },
    resumeRoute() {
      this.$store.state.route !== "resume" ? this.$router.push("/Resume") : "";
      this.$store.commit("changeRoute", "resume");
    },
    recipeRoute() {
      this.$store.state.route !== "recipe" ? this.$router.push("/Recipe") : "";
      this.$store.commit("changeRoute", "recipe");
    },
    rentRoute() {
      this.$store.state.route !== "rentBurdening"
        ? this.$router.push("/RentBurdening")
        : "";
      this.$store.commit("changeRoute", "rentBurdening");
    }
  }
};
</script>
<style scoped>
/* .navbar-item{
  color: white
} */
</style>