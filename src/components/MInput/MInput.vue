<template>
  <div class="mt-1 relative rounded-md shadow-sm">
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
      :class="[
        {
          'focus:ring-blue-500 focus:border-blue-500': state === null,
          'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500 placeholder-red-300':
            state !== null && !state,
          'pl-10': alignIcon === 'left',
        },
      ]"
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-bind="$attrs"
    />
    <div
      class="absolute inset-y-0 right-0 flex items-center pr-2 text-red-500"
      v-if="state !== null && !$slots.default && !state"
    >
      <MIcon solid>
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        ></path>
      </MIcon>
    </div>
    <div
      v-if="$slots.default"
      class="absolute inset-y-0 flex items-center pointer-events-none"
      :class="[
        { 'left-0 pl-3': alignIcon === 'left' },
        { 'right-0 pr-3': alignIcon === 'right' },
        { 'text-gray-400': state === null },
        { 'text-red-500': state !== null && !state },
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import MIcon from '../MIcon/MIcon.vue';

export const types = [
  'text',
  'password',
  'email',
  'number',
  'url',
  'date',
  'datetime-local',
  'month',
  'week',
  'time',
  'search',
  'tel',
];

export default {
  name: 'm-input',
  inheritAttrs: false,
  components: {
    MIcon,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return types.indexOf(value) !== -1;
      },
    },
    /**
     * @model
     * @ignore
     */
    value: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    state: {
      type: Boolean,
      default: null,
    },
    alignIcon: {
      type: String,
      default: 'right',
      validator: value => ['left', 'right'].indexOf(value) !== -1,
    },
  },
};
</script>

<style></style>
