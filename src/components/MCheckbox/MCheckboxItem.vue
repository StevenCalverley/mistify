<template>
  <div class="w-full flex flex-col">
    <label
      class="inline-flex items-center text-sm"
      :class="[{ 'flex-row-reverse': align === 'left' }]"
    >
      <span
        class="flex-grow"
        :class="[
          { 'ml-2': align === 'left' },
          { 'mr-2 text-right': align === 'right' },
        ]"
        >{{ optLabel }}</span
      >
      <input
        type="checkbox"
        class="w-5 h-5 rounded border-gray-400 text-blue-500 focus:ring-offset-0 focus:ring-opacity-75 focus:ring-blue-400 "
        :class="[{ 'bg-gray-200': disabled }]"
        :checked="checked"
        :value="optValue"
        @change="updateInput"
        :disabled="disabled"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'm-checkbox-item',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    modelValue: {
      type: [Array, String, Boolean],
      default: false,
    },
    align: {
      type: String,
      default: 'left',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
  },
  data() {
    return {
      optLabel: '',
      optValue: '',
    };
  },
  methods: {
    updateInput(event) {
      const isChecked = event.target.checked;

      if (this.modelValue instanceof Array) {
        const newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(event.target.value);
        } else {
          newValue.splice(newValue.indexOf(event.target.value), 1);
        }
        this.$emit('change', newValue);
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.optLabel = this.label;
        this.optValue = val === '' ? this.label : this.value;
      },
    },
  },
};
</script>

<style></style>
