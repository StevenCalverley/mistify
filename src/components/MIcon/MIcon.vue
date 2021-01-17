<template>
  <svg
    class="w-6 h-6"
    :fill="iconColor"
    :view-box.camel="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    :aria-labelledby="iconName"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g>
      <slot></slot>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    solid: {
      type: Boolean,
      default: false,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
  computed: {
    viewBox() {
      return this.solid ? '0 0 20 20' : '0 0 24 24';
    },
  },
};
</script>

<style></style>
