<template>
  <modal class="new-post" name="newPost" adaptive="True" height="auto">
    <div class="ui form post-area">
      <div>
        <div class="field">
          <textarea rows="3" class="textarea" placeholder="Post Message"></textarea>
        </div>
        <button class="ui primary basic icon button upload">
          <i class="cloud icon"></i>
          Upload Photos
        </button>
      </div>

      <div class="actions">
        <div class="schedule">
          <DatePicker
            v-model="scheduledDate"
            type="date"
            placeholder="Schedule Date"
            confirm-text="OK"
            confirm="true"
          ></DatePicker>
          <DatePicker
            v-model="scheduledTime"
            type="time"
            placeholder="Schedule Time"
            format="hh:mm a"
            value-type="format"
            confirm-text="OK"
            confirm="true"
          ></DatePicker>
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              No Repeat
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
          <button v-if="!scheduledDate || !scheduledTime" class="ui primary button">Post</button>
          <button v-if="scheduledDate && scheduledTime" class="ui primary button">Schedule</button>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  name: "newPostForm",
  data() {
    return {
      scheduledDate: "",
      scheduledTime: "",
      disabledDate:{
       to:new Date(Date.now())
      }
    }
  },
  components: {
    DatePicker
  }
};
</script>

<style>
.upload {
  margin: 0.5rem !important;
}
.schedule {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem;
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

.schedule > .menu {
  margin: 0.5rem;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1.5rem;
}
</style>