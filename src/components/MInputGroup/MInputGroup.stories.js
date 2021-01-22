import MInputGroup from './MInputGroup.vue';
import MInput from '../MInput/MInput.vue';

export default {
  title: 'Mistify/FormElements/InputGroup',
  component: MInputGroup,
  decorators: [() => '<div class="max-w-xs mx-auto"><story /></div>'],
  argTypes: {
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
  components: { MInputGroup, MInput },
  template: `
    <m-input-group v-bind="$props">
      <m-input id="test-input" :value="$props.value" :state="$props.state"/>
    </m-input-group>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  labelFor: 'test-input',
  description: 'A description',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  labelFor: 'test-input',
  description: 'A description',
  state: false,
  invalidFeedback: 'Incorrect value entered!',
};
