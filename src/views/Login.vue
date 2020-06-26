<template>
  <div class="home">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="Password"
              v-model="pword"
            />
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
            <Modal
              :status="this.status"
              @close-modal="close_modal"
              :msg="this.msg"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Modal from "../components/Modal";

export default {
  name: "Home",
  data() {
    return {
      pword: "",
      status: "",
      msg: ""
    };
  },
  components: {
    Modal,
  },
  methods: {
    authAttempt(msg) {
      this.msg = msg;
      this.pword = "";
      this.status = "active";
    },
    close_modal() {
      this.status = "";
    },
    login() {
      if (this.pword == process.env.VUE_APP_PASS) {
        // console.log(process.env.VUE_APP_FIREBASE_CONFIG)
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((res) => {
            this.$store.commit("authUser", { token: res.credential.idToken });
            this.$router.push('/admin')
          })
          .catch((err) => {
            this.authAttempt(err);
          });
      } else {
        this.authAttempt("Wrong password! 😔")
      }
    },
  },
};
</script>

<style scoped>
.field {
  margin-top: 3%;
}
</style>
