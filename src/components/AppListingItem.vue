<template >
  <div class="posted-item">
    <div class="post-message">
      <p>This is the last message that</p>
    </div>
    <div class="post-attachments">
      <carousel perPage="6" :navigationEnabled="true">
        <slide>
          <img src="https://placeholder.pics/svg/100x100" alt />
        </slide>
        <slide>
          <img src="https://placeholder.pics/svg/100x100" alt />
        </slide>
        <slide>
          <img src="https://placeholder.pics/svg/100x100" alt />
        </slide>
        <slide>
          <img src="https://placeholder.pics/svg/100x100" alt />
        </slide>
        <slide>
          <img src="https://placeholder.pics/svg/100x100" alt />
        </slide>
        <slide>
          <img src="https://placeholder.pics/svg/100x100" alt />
        </slide>
        <slide>
          <img src="https://placeholder.pics/svg/100x100" alt />
        </slide>
        <slide>
          <img src="https://placeholder.pics/svg/100x100" alt />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "listingItem",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      //posts: ["QQ", "QW", "wer", "QQq", "QWq", "werq", "QQs", "QWs", "wers"]
      posts: []
    };
  }
};
</script>

<style>
.posted-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  max-width: 50vw;
  border: 1px solid #000000;
  margin: 1.5rem 0 0 0;
}
.post-message {
  max-width: 48vw;
  width: 100%;
  min-width: 248px;
  margin: 1rem 0;
  align-items: flex-start;
  text-align: left;
  display: flex;
}
.post-attachments {
  display: flex;
  min-width: 248px;
  max-width: 48vw;
  margin: 1rem 0;
}
.post-attachments *{
   margin: 0 !important;
}
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