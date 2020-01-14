/* eslint-disable no-console */
<template>
  <div class="login-container">
    <div class="login-form">
      <logo/>
      <p>Use Facebook to schedule and automatically post to groups and reach more customers</p>
      <facebookLogin />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import router from '../router'
import facebookLogin from "../components/FacebookLogin";
import logo from "../components/AppLogo";
export default {
  components: {
    facebookLogin,
    logo
  },
  data() {
    return {
    };
  },
  mounted() {
     window.FB.login(function(response) {
        if (response.status == 'connected') {
          localStorage.clear()
          var data = response.authResponse
          var accessToken = data['accessToken']
          localStorage.setItem("accessToken",accessToken)
          router.push('/listing')
        } else {
          alert("User cancelled login or did not fully authorize.");
        }
      });
  },
  methods: {}
};
/* eslint-enable no-console */
</script>

<style>
p{
  width: 200px;
  position: relative;
  bottom: 50px;
}
.login-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-form{
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  height: 500px;
  border: 1px solid #dedede
}
</style>