import MInputGroup from './MInputGroup.vue';
import MInput from '../MInput/MInput.vue';
import MIcon from '../MIcon/MIcon.vue';

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
    alignIcon: {
      control: {
        type: 'select',
        options: ['left', 'right'],
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
      <m-input id="test-input" :value="$props.value" :state="$props.state" :placeholder="$props.placeholder"/>
    </m-input-group>
  `,
});

const TemplateWithIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MInputGroup, MInput, MIcon },
  template: `
    <m-input-group v-bind="$props">
      <m-input class="mt-1" id="test-input" :value="$props.value" :state="$props.state" :placeholder="$props.placeholder" :alignIcon="$props.alignIcon">
        <m-icon>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </m-icon>
      </m-input>
    </m-input-group>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  labelFor: 'test-input',
  placeholder: 'Enter your details',
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

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
  label: 'Email',
  labelFor: 'email-input',
  placeholder: 'Enter your email address',
  alignIcon: 'right',
};
