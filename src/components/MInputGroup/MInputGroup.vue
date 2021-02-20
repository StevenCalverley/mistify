<template>
  <div>
    <label
      v-if="label"
      :for="labelFor"
      class="block text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>
    <slot></slot>
    <p
      v-if="state === false && invalidFeedback"
      class="mt-1 text-sm text-red-600"
    >
      {{ invalidFeedback }}
    </p>
    <p v-if="description" class="mt-1 text-xs text-gray-400">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'm-input-group',
  props: {
    label: {
      type: String,
      default: null,
    },
    labelFor: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    state: {
      type: Boolean,
      default: null,
    },
    invalidFeedback: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
