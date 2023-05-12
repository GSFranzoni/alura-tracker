<template>
  <section class="flex flex-row items-center gap-5 shadow-lg p-4">
    <form class="flex flex-col flex-1" v-on:submit.prevent="onSubmit">
      <input
        class="p-2 rounded-md"
        type="text"
        placeholder="Type your task"
        v-model="task"
      />
    </form>
    <span class="text-gray-900 text-sm">
      <strong>{{ time }}</strong>
    </span>
    <div class="flex justify-between gap-2">
      <button
        class="p-2 rounded-md flex flex-row gap-2 items-center"
        :class="{ 'bg-green-500': !running, 'bg-gray-400': running }"
        v-on:click="start()"
        v-bind:disabled="running"
      >
        <font-awesome-icon class="text-white" icon="fa-play" />
        <span class="text-white text-sm font-semibold">Start</span>
      </button>
      <button
        class="p-2 rounded-md flex flex-row gap-2 items-center"
        :class="{ 'bg-red-500': running, 'bg-gray-400': !running }"
        v-on:click="stop()"
        v-bind:disabled="!running"
      >
        <font-awesome-icon class="text-white" icon="fa-stop" />
        <span class="text-white text-sm font-semibold">Stop</span>
      </button>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  name: "TaskForm",
  data: () => ({
    task: "",
    seconds: 0,
    interval: undefined,
  }),
  computed: {
    time() {
      return moment().startOf("day").seconds(this.seconds).format("HH:mm:ss");
    },
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
    },
    onSubmit() {
      this.$emit("submit", {
        task: this.task,
        time: this.time,
      });
      this.task = "";
      this.seconds = 0;
      this.stop();
    },
  },
});
</script>

<style></style>
