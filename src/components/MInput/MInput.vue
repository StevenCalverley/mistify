<template>
  <div class="relative flex">
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      class="block w-full text-gray-700 rounded sm:text-sm sm:leading-5 placeholder-gray-500 border-gray-300 focus:ring-2"
      :class="[
        {
          'focus:border-blue-600 focus:ring-blue-600': state === null,
          'border-red-400 text-red-700 focus:border-red-400 focus:ring-red-400 placeholder-red-400':
            state !== null && !state,
        },
      ]"
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-bind="$attrs"
    />
    <div
      class="absolute inset-y-0 right-0 flex items-center pr-2 text-red-600"
      v-if="state !== null && !state"
    >
      <MIcon solid>
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        ></path>
      </MIcon>
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
  },
};
</script>

<style></style>
