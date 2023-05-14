<template>
  <div
    class="p-3 rounded-lg shadow-lg flex flex-row items-center w-full gap-2"
    :class="pickedVariant.background"
  >
    <font-awesome-icon
      class="text-gray-900 font-semibold"
      :icon="pickedVariant.icon"
      :class="pickedVariant.color"
    />
    <span
      class="text-gray-900 text-sm font-semibold"
      :class="pickedVariant.color"
      >{{ message }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const variants = {
  success: {
    icon: "fa-check-circle",
    background: "bg-green-100",
    color: "text-green-800",
  },
  error: {
    icon: "fa-exclamation-circle",
    background: "bg-red-100",
    color: "text-red-800",
  },
  warning: {
    icon: "fa-exclamation-triangle",
    background: "bg-amber-100",
    color: "text-amber-800",
  },
  info: {
    icon: "fa-info-circle",
    background: "bg-blue-100",
    color: "text-blue-800",
  },
};

type Variant = keyof typeof variants;

export default defineComponent({
  name: "AppAlert",
  props: {
    variant: {
      type: String as () => Variant,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  computed: {
    pickedVariant() {
      return variants[this.variant];
    },
  },
});
</script>

<style></style>
