<template>
  <nav>
    <div class="brand">
      <i class="big bars icon" v-on:click="collapseSidebar"></i>
      LISTING
    </div>
    <div class="userDetails">
      <img class="ui avatar image" src="https://placeholder.pics/svg/50" alt="User Profile Picture" />
      <div class="ui compact menu">
        <div class="ui simple dropdown item">
          Dropdown
          <i class="dropdown icon"></i>
          <div class="menu">
             <div class="item">Link Facebook</div>
            <div class="item">
              <facebookLogout/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import facebookLogout from './FacebookLogout'
export default {
  name: "navBar",
  components:{
    facebookLogout
  },
  methods: {
    collapseSidebar() {
      document.getElementById("sideBar").classList.toggle("display");
    }
  }
};
</script>

<style lang="css" scoped>
nav {
  display: flex !important;
  position: relative;
  align-items: center;
  padding: 2.5rem 0.5rem !important;
  background-color: white;
  margin: 0 0 20px 0 !important;
  justify-content: space-between;
  border-bottom: 1px solid #3a5998;
}
.brand {
  display: flex;
  align-items: center;
  position:relative;
  right:0px;
}
.userDetails {
  position:relative;
  left:0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>