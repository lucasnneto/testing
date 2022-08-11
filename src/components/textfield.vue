<template>
  <v-text-field v-model="input" :label="label" outlined></v-text-field>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value: String,
    label: String,
  },
  data() {
    return {
      input: this.value,
    };
  },
  watch: {
    input(value) {
      this.$emit("input", value);
    },
  },
});
</script>
