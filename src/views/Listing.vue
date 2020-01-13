/* eslint-disable no-console */
<template>
  <div class="listing">
    <navBar />
    <div class="content" id="contentDimmer">
      <aside class="side">
        <sideBar></sideBar>
      </aside>
      <section class="section">
        <div class="createPost">
          <button id="contentNewButton" class="ui button newPostButton" v-on:click="show">
            <i class="edit outline icon"></i>
            New Listing
          </button>
        </div>
        <div id="contentList" class="content-list">
          <newPostForm />
          <listingItem />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import sideBar from "../components/AppSidebar";
import listingItem from "../components/AppListingItem";
import navBar from "../components/AppNavBar";
import newPostForm from "../components/NewPostForm";

export default {
  components: {
    sideBar,
    listingItem,
    navBar,
    newPostForm
  },
  methods: {
    show() {
      // eslint-disable-next-line no-console
      console.log("erty");
      this.$modal.show("newPost");
      // eslint-disable-next-line no-console
      console.log(this.$modal.show("createNewListing"));
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
.content-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  min-width: 80vw;
  min-height: 100vh;
}
.newPostItem {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.display {
  display: none;
}
.hidden {
  visibility: hidden;
}
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 0.28571429rem;
}
.section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 1rem;
  background-color: white;
  border-radius: 0.28571429rem;
}
.createPost {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  margin: 5px;
  justify-content: flex-end;
  border-bottom: 1px solid #4ca1ff;
}
.newPostButton {
  min-width: 50px;
  border-radius: 0.28571429rem;
  color: white !important;
  background-color: #4ca1ff !important;
  font-family: "Avenir", Helvetica, Arial, sans-serif !important;
}
</style>