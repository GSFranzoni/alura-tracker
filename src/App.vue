<template>
  <section class="grid grid-cols-4 h-screen">
    <side-bar />
    <main class="flex flex-col sm:flex-col col-span-3">
      <task-form />
    </main>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import TaskForm from "./components/TaskForm.vue";

export default defineComponent({
  name: "App",
  components: {
    SideBar,
    TaskForm,
  },
});
</script>

<style></style>
