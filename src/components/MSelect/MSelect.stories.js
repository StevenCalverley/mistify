import MSelect from './MSelect.vue';
import MSelectOption from './MSelectOption.vue';

export default {
  title: 'Mistify/FormElements/Select',
  component: MSelect,
  decorators: [() => '<div class="max-w-xs mx-auto"><story /></div>'],
  argTypes: {},
  args: {
    value: '',
  },
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MSelect },
  template: '<m-select v-bind="$props"><m-select>',
});

const TemplateWithOption = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MSelect, MSelectOption },
  template: `<m-select v-bind="$props">
    <m-select-option>Test Option</m-select-option>
  </m-select>`,
});

export const Default = Template.bind({});
Default.args = {
  id: 'test-select',
  options: ['Option 1', 'Option 2'],
};

export const DefaultWithOption = TemplateWithOption.bind({});
DefaultWithOption.args = {
  id: 'test-select-with-option',
  options: ['Option 1', 'Option 2'],
};
