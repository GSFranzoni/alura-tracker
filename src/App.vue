<template>
  <section class="grid grid-cols-4 h-screen">
    <side-bar />
    <main class="flex flex-col h-full col-span-3">
      <task-form v-on:stop="onStop" />
      <div class="flex flex-col gap-2 p-2">
        <app-task
          v-for="({ task, seconds }, index) in tasks"
          :key="index"
          :task="task"
          :seconds="seconds"
        />
        <app-alert
          v-if="tasks.length === 0"
          variant="warning"
          message="No tasks yet"
        />
      </div>
    </main>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import TaskForm from "./components/TaskForm.vue";
import AppTask from "./components/AppTask.vue";
import AppAlert from "./components/AppAlert.vue";

export default defineComponent({
  name: "App",
  components: {
    SideBar,
    TaskForm,
    AppTask,
    AppAlert,
  },
  data: () => ({
    tasks: [],
  }),
  methods: {
    onStop(task) {
      this.tasks.push(task);
    },
  },
});
</script>

<style></style>
