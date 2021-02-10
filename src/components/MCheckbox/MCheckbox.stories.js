import MCheckboxItem from './MCheckboxItem.vue';
import MCheckbox from './MCheckbox.vue';

export default {
  title: 'Mistify/FormElements/Checkbox',
  component: MCheckbox,
  decorators: [() => '<div class="max-w-xs mx-auto"><story /></div>'],
  argTypes: {
    onChange: { action: 'changed' },
    // align: {
    //   control: {
    //     type: 'select',
    //     options: ['left', 'right'],
    //   },
    // },
  },
  // args: {
  //   value: '',
  // },
};

const TemplateCheckbox = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MCheckbox },
  template: '<m-checkbox v-bind="$props" />',
});

const TemplateCheckboxItem = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MCheckboxItem },
  template: '<m-checkbox-item v-bind="$props" />',
});

export const DefaultCheckbox = TemplateCheckbox.bind({});
DefaultCheckbox.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
};

export const DefaultCheckboxItem = TemplateCheckboxItem.bind({});
DefaultCheckboxItem.args = {
  label: 'Single Checkbox Item',
};

export const DefaultCheckboxItemWithValue = TemplateCheckboxItem.bind({});
DefaultCheckboxItemWithValue.args = {
  label: 'Single Checkbox Item - True Value',
  trueValue: 'Single Checkbox Item - True Value',
};
