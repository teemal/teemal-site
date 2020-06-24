<template>
  <div class="home">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="pword"/>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success" @click="login">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {
        pword: ''
    };
  },
  components: {},
  methods:{
      login(){
          if(this.pword == process.env.VUE_APP_PASS){
              // console.log(process.env.VUE_APP_FIREBASE_CONFIG)
              const provider = new firebase.auth.GoogleAuthProvider();
              firebase
              .auth()
              .signInWithPopup(provider)
              .then((res)=>{
                  console.log('ayyyy')
              })
              .catch((err)=>{
                  console.log('woopsie:\n' + JSON.stringify(err))
              })

          } else{
              alert('incorrect password :(')
          }
      }
  }
};
</script>

<style scoped>
.field{
    margin-top: 3%;
}
</style>
