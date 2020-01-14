<template>
  <button class="button" @click="logInWithFacebook">
    <i class="facebook icon"></i>
    Enable Facebook
  </button>
</template>
<script>
import router from "../router";
export default {
  name: "facebookConnect",
  mounted() {
    var js,
      fjs = document.getElementsByTagName("script")[0];
    if (document.getElementById("facebook-jssdk")) {
      return;
    }
    js = document.createElement("script");
    js.id = "facebook-jssdk";
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);

     window.fbAsyncInit = function() {
        window.FB.init({
          appId: "1797524850462493",
          cookie: true,
          status: true,
          xfbml: true,
          version: "v5.0"
        });
      };
  },
  methods: {
    async logInWithFacebook() {
      window.FB.login(
        function(response) {
          if (response.status == "connected") {
            localStorage.clear();
            var data = response.authResponse;
            var accessToken = data["accessToken"];
            localStorage.setItem("accessToken", accessToken);
            router.push("/listing");
          } else {
            alert("User cancelled login or did not fully authorize.");
          }
        },
        {
          scope:
            "email,user_likes,manage_pages,pages_show_list,publish_pages,publish_to_groups,user_posts"
        }
      );
      return false;
    },
  }
};
</script>
<style scoped>
.button {
  color: white;
  background-color: #415dad;
  font-weight: 400;
  font-size: 0.8rem;
  margin: 0.25rem 0 0.5rem 0 !important;
}
</style>