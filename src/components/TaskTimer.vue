<template>
  <span class="text-gray-900 text-sm">
    <strong>{{ time }}</strong>
  </span>
</template>

<script>
import moment from "moment";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskTimer",
  props: {
    seconds: {
      type: Number,
      required: true,
    },
  },
  data: () => ({}),
  computed: {
    time() {
      return moment().startOf("day").seconds(this.seconds).format("HH:mm:ss");
    },
  },
  methods: {},
});
</script>

<style></style>
