<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click="homeRoute">Home</a>
        <a class="navbar-item" @click="resumeRoute">Resume</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    methods:{
        homeRoute(){
            this.$store.state.route !== 'home' ? this.$router.push('/') : '';
            this.$store.commit('changeRoute', 'home');
        },
        resumeRoute(){
            this.$store.state.route !== 'resume' ? this.$router.push('/Resume') : '';
            this.$store.commit('changeRoute', 'resume');
        }
    }
};
</script>
<style scoped>
</style>