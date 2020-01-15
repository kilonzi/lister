/* eslint-disable no-console */
<template>
  <div class="login-container">
    <h3>Create an account to post automagically</h3>
    <div class="login-form">
      <logo />

      <form class="login-content">
        <div class="ui fluid icon input login-input">
          <input type="text" placeholder="Fullname" v-model="fullname" autocomplete="name" />
        </div>
        <div class="ui fluid icon input login-input">
          <input type="email" placeholder="Email Address" v-model="email" autocomplete="email" />
        </div>
        <div class="ui fluid icon input login-input">
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            autocomplete="new-password"
          />
        </div>
        <div class="ui fluid icon input login-input">
          <input
            type="password"
            placeholder="Confirm Password"
            v-model="confirmPassword"
            autocomplete="new-password"
          />
        </div>
        <button class="primary-button" type="button" @click="onSignUp">
          <i class="user icon"></i>
          Signup
        </button>
      </form>
      <p>
        <router-link :to="{ name: 'signin'}">Sign in to post</router-link>
      </p>
      <p>
        <router-link :to="{ name: 'reset'}">Reset password</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import logo from "../components/AppLogo";
import firebase from "firebase";
// import config from "../../firebase.config";
import router from "../router";
// firebase.initializeApp(config);
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      fullname: "",
      confirmPassword: ""
    };
  },
  components: {
    logo
  },
  methods: {
    onSignUp() {
      var $vm = this;
      if (this.password == this.confirmPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // eslint-disable-next-line
            console.log(errorCode, errorMessage);
          })
          .then(function() {
            firebase.auth().onAuthStateChanged(function(user) {
              user
                .updateProfile({
                  displayName: $vm.fullname,
                  photoURL:
                    "https://ui-avatars.com/api/?rounded=true&background=ADAA29&color=3a5998&name=" +
                    $vm.fullname
                })
                .then(function() {
                  // Update successful.
                  router.push("/signin");
                })
                .catch(function(error) {
                  // An error happened.
                  // eslint-disable-next-line
                  console.log(error);
                });
            });
          });
      } else {
        // eslint-disable-next-line
        console.log("Passwords do not match");
      }
    }
  }
};
</script>

<style scoped>
p {
  padding: 0.5rem;
}
h3 {
  max-width: 600px;
  font-size: 2rem;
  font-weight: bolder;
  padding: 0.5rem;
}
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  min-width: 300px;
  height: 500px;
  border-radius: 0.25rem;
}
.login-content {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.login-input {
  min-width: 250px;
  margin: 0.5rem 0;
  height: 40px;
}
.primary-button {
  width: 150px !important;
  background-color: #3a5998;
  height: 36px;
  border: 1px solid #3a5998;
  color: #ffffff;
  border-radius: 0.25rem;
  margin: 0.5rem 0.2rem;
  font-size: 1rem;
}
</style>