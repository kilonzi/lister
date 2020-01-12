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
            <div class="item">Choice 1</div>
            <div class="item">Choice 2</div>
            <div class="item">Choice 3</div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  methods: {
    collapseSidebar() {
      document.getElementById("sideBar").classList.toggle("hidden");
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
  background-color: white;
  margin: 0 0 20px 0 !important;
  justify-content: space-between;
}
.brand {
  position: relative;
}
.userDetails {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>