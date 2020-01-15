<template>
  <div>
    <button class="ui red basic button" @click="logOutFacebook">Logout</button>
  </div>
</template>
<script>
import router from "../router";
export default {
  name: "facebookLogout",
  methods: {
    async logOutFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      window.FB.logout(function(response) {
        // eslint-disable-next-line
        if (response || response.status == "Unknown") {
          router.push("/login");
        } else {
          router.push("/login");
        }
      });
    },
    async initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "822017987937077",
          cookie: true, // This is important, it's not enabled by default
          status: false,
          xfbml: true,
          version: "v5.0"
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }
};
</script>
<style>
.button {
  color: white;
  min-width: 150px;
  background-color: #415dad;
  height: 2.5rem;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}
</style>