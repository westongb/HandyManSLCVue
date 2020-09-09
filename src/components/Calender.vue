
<template>
  <div ref="scheduler"></div>
</template>
 
<script>
  
import 'dhtmlx-scheduler'
export default {
  name: 'scheduler',
  props: {
    events: {
      type: Array,
      default () {
        return {events: []}
      }
    }
  },
 
  mounted: function () {
    scheduler.skin = "material";
    scheduler.config.header = [
        "day",
        "week",
        "month",
        "date",
        "prev",
        "today",
        "next"
    ];
 
    scheduler.init(this.$refs.scheduler, new Date(2020, 0, 20), "week");
    scheduler.parse(this.$props.events);
  }
}
</script>
 
<style>
    @import "~dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";
</style>