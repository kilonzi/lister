<template>
  <div>
    <button v-if="!fbConnected" class="button" @click="logInWithFacebook">
      <i class="facebook icon"></i>
      Enable Facebook
    </button>
    <button v-if="fbConnected" class="button" @click="logInWithFacebook">
      <i class="facebook icon"></i>
      Connected
    </button>
  </div>
</template>
<script>
// import router from "../router";

export default {
  name: "facebookConnect",
  data(){
    return{
      fbConnected:false
    }
  },
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
        appId: "822017987937077",
        cookie: true,
        status: true,
        xfbml: true,
        version: "v5.0"
      });
    };
  },
  methods: {
    async logInWithFacebook() {
      var $vm = this
      window.FB.login(
        function(response) {
          if (response.status == "connected") {
            localStorage.clear();
            var data = response.authResponse;
            var accessToken = data["accessToken"];
            localStorage.setItem("accessToken", accessToken);
            $vm.fbConnected=true
          } else {
            alert("User cancelled login or did not fully authorize.");
          }
        },
        {
          scope:
            "email,user_likes,manage_pages,pages_show_list,publish_pages,publish_to_groups,user_posts,groups_access_member_info"
        }
      );
      return false;
    }
  }
};
</script>
<style scoped>
.button {
  color: white;
  background-color: #415dad;
  font-weight: 700;
  font-size: 0.8rem;
  margin: 0.5rem 0 0.5rem 0 !important;
  height: 36px;
  padding: 5px;
  border-radius: 0.25rem;
  border: 1px solid #415dad;
}
.button {
  color:  #415dad;
  background-color:white;
  font-weight: 700;
  font-size: 0.8rem;
  margin: 0.5rem 0 0.5rem 0 !important;
  height: 36px;
  padding: 5px;
  border-radius: 0.25rem;
  border: 1px solid #415dad;
}
</style>