<template>
  <div
    class="p-3 shadow-lg rounded-lg flex flex-row items-center w-full bg-[color:var(--bg-secondary)]"
  >
    <span
      class="text-sm font-semibold flex-1 text-[color:var(--text-primary)]"
      >{{ task.name || "Unnamed task" }}</span
    >
    <task-timer
      class="flex-1 text-[color:var(--text-primary)]"
      :seconds="task.seconds"
    />
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
      required: true,
    },
  },
});
</script>

<style></style>
