<template>
  <button class="p-2 rounded-md flex flex-row gap-2 items-center">
    <font-awesome-icon class="text-white" :icon="icon" />
    <span class="text-white text-sm font-semibold">
      {{ label }}
    </span>
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style></style>
