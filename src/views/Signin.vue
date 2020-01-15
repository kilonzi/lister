/* eslint-disable no-console */
<template>
  <div class="login-container">
    <h3>Sign in to post automagically</h3>
    <div class="login-form">
      <logo />

      <form class="login-content">
        <div class="ui fluid icon input login-input">
          <input type="email" placeholder="Email Address" id="email" v-model="email" />
        </div>
        <div class="ui fluid icon input login-input">
          <input type="password" placeholder="Password" id="password" v-model="password" />
        </div>
        <button class="primary-button" id="sign-in-button" @click="onSignInSubmit" type="button">
          <i class="unlock icon"></i>
          Login
        </button>
      </form>
      <p>
        <router-link :to="{ name: 'signup'}">Create a FREE account</router-link>
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
import config from "../../firebase.config";
import router from "../router";
firebase.initializeApp(config);
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    logo
  },
  mounted() {},
  methods: {
    onSignInSubmit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(UserCredential => {
          if (UserCredential.user.email) {
            router.push("/listing");
          } else {
            router.push();
          }
        })
        .catch(function(error) {
          if (error) {
            alert(error);
          }
        });
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