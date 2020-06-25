<template>
  <div class="home">
    <div class="columns" v-if="this.$store.state.hasAuth">
      <div class="column is-10 is-offset-1">
        <p>Add Recipe bitch!</p>
      </div>
    </div>
    <div v-else>NOT AUTHED :(</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
</style>
