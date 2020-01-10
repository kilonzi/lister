<template>
  <div class="listing">
    <navBar />
    <div class="content">
      <aside class="side">
        <sideBar></sideBar>
      </aside>
      <section class="section">
        <div class="createPost">
          <button class="ui button newPostButton">
            <i class="edit outline icon"></i>
            New Listing
          </button>
        </div>
        <listingItem />
      </section>
    </div>
  </div>
</template>

<script>
import sideBar from "../components/AppSidebar";
import listingItem from "../components/AppListingItem";
import navBar from "../components/AppNavBar";
export default {
  components: {
    sideBar,
    listingItem,
    navBar
  }
};
</script>

<style>
/* .listing {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
} */
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 0.28571429rem;
}
.section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
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
  min-width: 100px;
  border-radius: 0.28571429rem;
  color: white !important;
  background-color: #4ca1ff !important;
  font-family: 'Avenir', Helvetica, Arial, sans-serif !important;
}
</style>