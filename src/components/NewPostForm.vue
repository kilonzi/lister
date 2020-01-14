<template>
  <div class="ui form post-area">
    <div class="post-content">
      <textarea rows="3" class="textarea" placeholder="Message"></textarea>
      <div class="post-attachments">
        <div class="post-icons">
          <i class="camera icon"></i>
        </div>
        <div class="post-actions">
          <button class="secondary-button" id="save">
            <i class="save icon"></i>
            Save
          </button>
          <button class="primary-button" id="post">
            <i class="send icon"></i>
            Post
          </button>
        </div>
      </div>
      <div class="post-schedule">
        <div class="toggle-schedule">
          <div class="ui toggle checkbox">
            <input type="checkbox" name="public" v-model="scheduleToggle" @select="toggleSchedule"/>
            <label>Schedule</label>
          </div>
        </div>
        <div v-if="scheduleToggle" class="schedule-settings">
          <DatePicker
            v-model="scheduledDate"
            type="date"
            placeholder="Date"
            confirm-text="OK"
            v-bind:confirm="true"
            v-bind:show-second="false"
          ></DatePicker>
          <DatePicker
            v-model="scheduledTime"
            type="time"
            placeholder="Time"
            format="hh:mm a"
            value-type="format"
            confirm-text="OK"
             v-bind:confirm="true"
             v-bind:show-second="false"
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
      scheduledDate: "",
      scheduledTime: "",
      scheduleToggle:""
    };
  },
  methods:{
toggleSchedule(){
  // eslint-disable-next-line 
  console.log(scheduleToggle)
}
  },
  components: {
    DatePicker
  }
};
</script>

<style scoped>
.post-content {
  display: flex;
  flex-direction: column;
}
textarea {
  width: 100% !important;
  margin: 0.5rem 0 !important;
  box-sizing: border-box;
}
.post-attachments {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.post-actions * {
  max-width: 90px !important;
}
.secondary-button {
  max-width: 100px !important;
  background-color: white;
  height: 36px;
  border: 1px solid #3a5998;
  color: #3a5998;
  border-radius: 0.25rem;
  margin: 0.5rem 0.2rem;
}
.primary-button {
  max-width: 100px !important;
  background-color: #3a5998;
  height: 36px;
  border: 1px solid #3a5998;
  color: #ffffff;
  border-radius: 0.25rem;
  margin: 0.5rem 0.2rem;
}

.toggle-schedule {
  display: flex !important;
  align-items: flex-start !important;
}

.schedule {
  display: flex !important;
  flex-direction: column !important;
}
.schedule * {
  max-width: fit-content !important;
}
.schedule-settings {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0 0 0 !important;
}

.schedule-settings * {
  margin: 0 10px 0 0 !important;
  max-width: 200px !important;
}
</style>