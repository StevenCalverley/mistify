<template>
  <div class="w-full flex flex-col space-y-2">
    <m-checkbox-item
      v-for="option in parsedOptions"
      :key="option.value"
      :modelValue="selectedOptions"
      :label="option.display"
      :value="option.value"
      @change="handleItemChange($event)"
      :checked="selectedOptions.includes(option.value)"
    />
  </div>
</template>

<script>
import MCheckboxItem from './MCheckboxItem.vue';

export default {
  name: 'm-checkbox',
  components: {
    MCheckboxItem,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: [Array],
      default: () => [],
    },
  },
  data() {
    return {
      selectedOptions: [],
    };
  },
  computed: {
    parsedOptions() {
      return this.options.map(option => {
        if (typeof option === 'string') {
          return {
            value: option,
            display: option,
          };
        }
        // need to check option is correct object
        return option;
      });
    },
  },
  methods: {
    handleItemChange(selected) {
      this.selectedOptions = selected;
    },
  },
  watch: {
    selectedOptions(val) {
      this.$emit('change', val);
    },
  },
};
</script>

<style></style>
