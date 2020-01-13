<template>
  <div>
    <v-facebook-login app-id="822017987937077"></v-facebook-login>
  </div>
</template>

<script>
import { VFBLogin as VFacebookLogin } from "vue-facebook-login-component";
export default {
  name: "facebookLogin",
  components: {
    VFacebookLogin
  }
};
</script>

<style>
</style>