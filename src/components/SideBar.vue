<template>
  <aside class="p-3 flex flex-col gap-3 bg-slate-950 shadow-lg">
    <img alt="App logo" src="../assets/logo.png" class="w-full" />
    <toggle-theme-button />
  </aside>
</template>

<script>
import { defineComponent } from "vue";
import ToggleThemeButton from "./ToggleThemeButton.vue";

export default defineComponent({
  name: "SideBar",
  components: {
    ToggleThemeButton,
  },
});
</script>

<style></style>
