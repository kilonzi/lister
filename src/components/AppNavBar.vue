<template>
  <nav>
    <div class="brand">
      <i class="big bars icon" v-on:click="collapseSidebar" ></i>
      LISTING
    </div>
    <div class="userDetails">
      <img src="https://placeholder.pics/svg/70" alt="User Profile Picture" />
    </div>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  methods:{
      collapseSidebar(){
        document.getElementById("sideBar").classList.toggle('hidden')
      }
  }
};
</script>

<style lang="css" scoped>
nav {
  display: flex !important;
  position: relative;
  align-items: center;
  padding: 20px;
  background-color: aqua;
  margin: 0 0 20px 0 !important;
  justify-content: space-between;
}
.brand {
  position: relative;
}
.userDetails {
  position: relative;
}
</style>