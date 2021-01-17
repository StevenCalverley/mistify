import MInput, { types } from './MInput.vue';

export default {
  title: 'Mistify/FormElements/Input',
  component: MInput,
  decorators: [() => '<div class="max-w-xs mx-auto"><story /></div>'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: types,
      },
    },
    state: {
      control: {
        type: 'select',
        options: [null, false],
      },
    },
  },
  args: {
    value: '',
  },
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MInput },
  template: '<m-input v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'input',
  type: 'text',
  placeholder: 'Default Text Input',
  state: null,
};

export const Password = Template.bind({});
Password.args = {
  id: 'input-password',
  type: 'password',
  placeholder: 'Password Input',
  state: null,
};

export const Error = Template.bind({});
Error.args = {
  id: 'input-error',
  type: 'text',
  placeholder: 'Default Error Input',
  state: false,
};
