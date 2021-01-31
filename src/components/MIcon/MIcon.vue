<template>
  <svg
    class="w-6 h-6"
    :fill="localIconColor"
    :stroke="localStrokeColor"
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
      default: '',
    },
    strokeColor: {
      type: String,
      default: '',
    },
  },
  computed: {
    viewBox() {
      return this.solid ? '0 0 20 20' : '0 0 24 24';
    },
  },
  data: () => ({
    localStrokeColor: '',
    localIconColor: '',
  }),
  watch: {
    solid: {
      handler(val) {
        if (this.iconColor === '') {
          this.localIconColor = !val ? 'none' : 'currentColor';
        } else {
          this.localIconColor = this.iconColor;
        }

        if (this.strokeColor === '') {
          this.localStrokeColor = val ? 'none' : 'currentColor';
        } else {
          this.localStrokeColor = this.strokeColor;
        }
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
