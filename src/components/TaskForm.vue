<template>
  <section class="flex flex-row items-center gap-5 shadow-lg p-4">
    <input
      class="p-2 rounded-md flex-1"
      type="text"
      placeholder="Type your task"
      v-model="task"
    />
    <task-timer :seconds="seconds" />
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

<script>
import { defineComponent } from "vue";
import TaskTimer from "./TaskTimer.vue";
import AppButton from "./AppButton.vue";

export default defineComponent({
  components: { TaskTimer, AppButton },
  name: "TaskForm",
  data: () => ({
    task: "",
    seconds: 0,
    interval: undefined,
  }),
  computed: {
    running() {
      return this.interval !== undefined;
    },
  },
  methods: {
    start() {
      this.interval = setInterval(() => {
        this.seconds++;
      }, 1000);
    },
    stop() {
      clearInterval(this.interval);
      this.interval = undefined;
      this.$emit("onStop", {
        task: this.task,
        time: this.time,
      });
      this.task = "";
      this.seconds = 0;
    },
  },
});
</script>

<style></style>
