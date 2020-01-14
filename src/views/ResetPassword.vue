/* eslint-disable no-console */
<template>
  <div class="login-container">
    <h3>Reset password to post automagically</h3>
    <div class="login-form">
      <logo />

      <form class="login-content">
        <div class="ui fluid icon input login-input">
          <input type="email" placeholder="Email Address" />
        </div>
        <button class="primary-button">
          <i class="eye icon"></i>
          Reset
        </button>
      </form>
      <p>
        <router-link :to="{ name: 'signup'}">Create a FREE account</router-link>
      </p>
      <p>
    <router-link :to="{ name: 'signin'}">Sign in to your account</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import logo from "../components/AppLogo";

export default {
  name: "Reset",
  components: {
    logo
  }
};
</script>

<style scoped>
p{
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