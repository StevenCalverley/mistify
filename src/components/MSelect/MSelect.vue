<template>
  <select
    :id="id"
    @change="onChange"
    class="border-gray-300 rounded w-full text-sm"
  >
    <option class="text-gray-600">Select...</option>
    <option
      v-for="option in options"
      :key="option"
      :selected="option === value"
    >
      {{ option }}
    </option>
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: 'm-select',
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style></style>
