/* eslint-disable no-console */
<template>
  <div class="login-button">
    <div>
      <button v-if="!loggedIn" class="ui primary button" @click="login">Continue with Facebook</button>
    </div>
    <div id="fb-root"></div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import router from '../router'
export default {
  components: {},
  data() {
    return {
      loggedIn: false
    };
  },
  mounted() {
    window.FB.getLoginStatus(function(response) {
      if (response.status == "connected") {
        var token = response.authResponse.accessToken;
        var user = response.authResponse.userID;
        var expiresIn = response.authResponse.expiresIn;
        localStorage.clear();
        localStorage.setItem("accessToken", token);
        localStorage.setItem("userID", user);
        localStorage.setItem("expiresIn", expiresIn);
        router.push("/listing");
      }
    });
  },
  methods: {
    login() {
      window.FB.init({
        appId: "{1797524850462493}",
        version: "v13.0"
      });
      window.FB.getLoginStatus(function(response) {
        if (response.status == "connected") {
          var token = response.authResponse.accessToken;
          var user = response.authResponse.userID;
          var expiresIn = response.authResponse.expiresIn;
          localStorage.clear();
          localStorage.setItem("accessToken", token);
          localStorage.setItem("userID", user);
          localStorage.setItem("expiresIn", expiresIn);
          this.$router.push("/listing");
        } else {
          console.log("User is logged out or has not authenticated");
          window.FB.login(function(response) {
            console.log(response);
          });
        }
      });
    },
    logout() {
      window.FB.logout(function(response) {
        this.loggedIn = false;
        console.log(response);
      });
    }
  }
};
/* eslint-enable no-console */
</script>

<style>
.login-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>