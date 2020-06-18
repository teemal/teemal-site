<template>
  <div class="home">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <img src="@/assets/my_big_dumb_face.png" id="face"><br>
        <vue-typer v-bind:text=this.textArr></vue-typer>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  name: 'Home',
  data(){
    return{
    textArr : [
      'Hi there!',
      'This is my personal website.',
      '🥳',
      '🎉',
      '🎊',
      '🙃'
    ]
    }
  },
  components: {
    VueTyper
  }
}
</script>

<style scoped>
#face{
  height: 70vh;
}
.vue-typer{
  font-family: 'Helvetica, sans-serif';
  font-size: 2em;
}
</style>
