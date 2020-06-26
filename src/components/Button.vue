<template>
  <div>
      <button class="button" v-bind:class="this.color" @click="button_selected">{{name}}</button>
  </div>
</template>
<script>
export default {
  methods: {
      button_selected(){
          this.$emit('button_selected', this.name)
      }
  },
  props: {
      status: '',
      name: '',
      color: ''
  },
};
</script>
<style scoped></style>
