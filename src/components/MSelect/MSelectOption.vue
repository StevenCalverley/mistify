<template>
  <option :selected="selected"><slot /></option>
</template>

<script>
export default {
  name: 'm-select-option',
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
