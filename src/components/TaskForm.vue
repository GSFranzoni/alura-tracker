<template>
  <section
    class="flex flex-row items-center gap-5 shadow-lg p-4 bg-[color:var(--bg-primary)]"
  >
    <input
      class="p-2 rounded-md flex-1 bg-[color:var(--bg-secondary)] text-[color:var(--text-primary)]"
      type="text"
      placeholder="Type your task"
      v-model="task.name"
    />
    <task-timer :seconds="task.seconds" />
    <div class="flex justify-between gap-2">
      <app-button
        label="Start"
        icon="fa-play"
        :class="{ 'bg-green-500': !running, 'bg-gray-400': running }"
        v-on:click="start()"
        v-bind:disabled="running"
      />
      <app-button
        label="Stop"
        icon="fa-stop"
        :class="{ 'bg-red-500': running, 'bg-gray-400': !running }"
        v-on:click="stop()"
        v-bind:disabled="!running"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskTimer from "./TaskTimer.vue";
import AppButton from "./AppButton.vue";

export default defineComponent({
  components: { TaskTimer, AppButton },
  name: "TaskForm",
  emits: ["stop"],
  data: () => ({
    task: {
      name: "",
      seconds: 0,
    },
    interval: undefined as number | undefined,
  }),
  computed: {
    running() {
      return this.interval !== undefined;
    },
  },
  methods: {
    start() {
      this.interval = setInterval(() => {
        this.task.seconds++;
      }, 1000);
    },
    stop() {
      clearInterval(this.interval);
      this.interval = undefined;
      this.$emit("stop", this.task);
      this.task = {
        name: "",
        seconds: 0,
      };
    },
  },
});
</script>

<style></style>
