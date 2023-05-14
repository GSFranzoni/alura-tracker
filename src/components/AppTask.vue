<template>
  <div
    class="p-3 bg-slate-300 shadow-lg rounded-lg flex flex-row items-center w-full"
  >
    <span class="text-gray-900 text-sm font-semibold flex-1">{{
      task.name
    }}</span>
    <task-timer class="flex-1" :seconds="task.seconds" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TaskTimer from "./TaskTimer.vue";
import { Task } from "../types/Task";

export default defineComponent({
  name: "AppTask",
  components: {
    TaskTimer,
  },
  props: {
    task: {
      type: Task,
      required: true,
    },
  },
});
</script>

<style></style>
