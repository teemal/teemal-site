<template>
  <div>
    <div class="modal" v-bind:class=" this.status ? 'is-active' : ' '">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
            {{msg}}
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="close_modal"></button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
      close_modal(){
          this.$emit('close-modal')
      }
  },
  props: {
      status: '',
      msg: ''
  },
};
</script>
<style scoped></style>
