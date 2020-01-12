<template>
  <div class="new-post">
    <div class="ui form post-area">
      <div class="field">
        <textarea rows="3" class="textarea" placeholder="Post Message"></textarea>
      </div>
      <div class="actions">
        <div class="schedule">
          <DatePicker v-model="scheduled" type="date" placeholder="Schedule Date"></DatePicker>
          <DatePicker
            v-model="scheduled"
            type="time"
            placeholder="Schedule Time"
            format="hh:mm a"
            value-type="format"
          ></DatePicker>
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              Repeat
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item">Daily</div>
                <div class="item">Weekly</div>
                <div class="item">Monthly</div>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons">
          <button class="ui primary basic icon button">
            <i class="cloud icon"></i>
            Upload Photos
          </button>
          <button class="ui primary button">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  name: "newPostForm",
  data() {
    return {
      scheduled: ""
    };
  },
  components: {
    DatePicker
  }
};
</script>

<style>
@media only screen and (min-width: 962px) {
  .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 90%;
    margin: 1rem;
  }
  .buttons * {
    margin: 1.5rem;
  }
  .schedule {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
}
@media only screen and (max-width: 961.999999999px) {
  .actions {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 90%;
    margin: 1rem;
  }
  .buttons {
    display: flex;
    flex-direction: column;
  }
  .buttons * {
    margin: 1.5rem;
  }
}

.new-post {
  width: 90%;
  border: 2px solid black;
}

.post-area {
  display: flex;
  flex-direction: column;
}
.field {
  max-width: 90%;
  padding: 0.5rem;
}
.textarea {
  width: 60%;
}

.schedule {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
}
.schedule > .menu {
  margin: 1rem;
}
</style>