<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "datepicker",
  components: { DatePicker },
  data() {
    return {
      scheduled: null
    };
  }
};
</script> 
 
<template>
  <div>
    <date-picker v-model="scheduled" type="datetime" placeholder="Schedule" format='YYYY-MM-DD'></date-picker>
  </div>
</template>