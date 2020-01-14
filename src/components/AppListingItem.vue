<template >
  <div class="listContainer">
    <div class="listingItems">
      <div class="ui card listItem" v-for="post in posts" :key="post">
        <div class="content">
          <div class="right floated meta">14h</div>
          <img class="ui avatar image" src="https://placeholder.pics/svg/300" /> Elliot
        </div>
        <div class="image">
          <img src="https://placeholder.pics/svg/500" /> Elliot
        </div>
        <div class="content">
          <span class="right floated">
            <i class="heart outline like icon"></i>
            17 likes
          </span>
          <i class="comment icon"></i>
          3 comments
        </div>
        <div class="extra content">
          <div class="ui large transparent left icon input">
            <i class="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..." />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listingItem",
  data() {
    return {
      //posts: ["QQ", "QW", "wer", "QQq", "QWq", "werq", "QQs", "QWs", "wers"]
      posts: []
    };
  }
};
</script>

<style>
.listContainer {
  height: 100vh;
}
/* .listItem {
  margin: 0.5em 0.5em !important;
} */
.listingItems {
  max-height: 100%;
  margin: 0em;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>