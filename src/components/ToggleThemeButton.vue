<template>
  <app-button
    class="w-full p-4 bg-[#49586d] text-white"
    label="Toggle Theme"
    :icon="dark ? 'fa-sun' : 'fa-moon'"
    v-on:click="toggle()"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "./AppButton.vue";

export default defineComponent({
  components: { AppButton },
  name: "ToggleThemeButton",
  props: {},
  data: () => ({
    dark: false,
  }),
  computed: {},
  methods: {
    toggle() {
      this.dark = !this.dark;
    },
  },
  watch: {
    dark() {
      localStorage.setItem("dark", this.dark.toString());
      document.documentElement.setAttribute(
        "data-theme",
        this.dark ? "dark" : "light"
      );
    },
  },
  mounted() {
    this.dark = localStorage.getItem("dark") === "true";
  },
});
</script>

<style></style>
