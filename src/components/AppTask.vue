<template>
  <div
    class="p-3 bg-slate-300 shadow-lg rounded-lg flex flex-row items-center w-full"
  >
    <span class="text-gray-900 text-sm font-semibold flex-1">{{ task }}</span>
    <task-timer class="flex-1" :seconds="seconds" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TaskTimer from "./TaskTimer.vue";

export default defineComponent({
  name: "AppTask",
  components: {
    TaskTimer,
  },
  props: {
    task: {
      type: String,
      required: true,
    },
    seconds: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style></style>
