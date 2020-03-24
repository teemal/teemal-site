<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click="$store.state.route !== 'home' ? $router.push('/') : ''">Home</a>
        <a class="navbar-item">Documentation</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
</style>