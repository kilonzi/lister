/* eslint-disable no-console */
<template>
  <div class="content">
    <navBar />
    <div class="section">
      <div class="social-connections">
        <div class="facebook-connect">
          <facebookConnect />
        </div>
        <button @click="getFacebookData">Check Data</button>
      </div>
      <div id="contentList" class="content-list">
        <div class="new-content">
          <newPostForm />
        </div>
        <div class="posted-content">
          <listingItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import sideBar from "../components/AppSidebar";
import listingItem from "../components/AppListingItem";
import navBar from "../components/AppNavBar";
import newPostForm from "../components/NewPostForm";
import facebookConnect from "../components/FacebookConnect";

export default {
  components: {
    // sideBar,
    listingItem,
    navBar,
    newPostForm,
    facebookConnect
  },
  mounted() {
    // window.FB.api(
    //   "/me",
    //   "GET",
    //   { fields: "id,name,picture{url},permissions" },
    //   function(response) {
    //     // eslint-disable-next-line
    //     console.log(response);
    //   }
    // );
  },
  methods: {
    getFacebookData() {
      window.FB.api("/me/groups", function(response) {
        if (response && !response.error) {
          /* handle the result */
          // eslint-disable-next-line
          console.log(response);
        }
      });
    },
    hide() {
      this.$modal.hide("createNewListing");
    },
    openCreateListing() {
      // document.getElementById("contentList").classList.toggle("hidden");
      // document.getElementById("contentNewButton").classList.toggle("hidden");
      document.getElementById("createNewListing").classList.toggle("display");
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.section {
  display: flex;
  flex-direction: column;
  background-color: white;
}
.social-connections {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 0.5rem 0 !important;
  border-bottom: 1px solid #3a5998;
}
.social-connections * {
  margin: 0.25rem !important;
}
.content-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 0.5rem !important;
  min-height: 100vh;
}

.createPost {
  width: 100vw !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  margin: 5px;
  justify-content: flex-end;
  border-bottom: 1px solid #4ca1ff;
}
</style>