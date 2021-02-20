import MInput, { types } from './MInput.vue';
import MIcon from '../MIcon/MIcon.vue';

export default {
  title: 'Mistify/FormElements/InputWithIcon',
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
    alignIcon: {
      control: {
        type: 'select',
        options: ['right', 'left'],
      },
    },
  },
  args: {
    value: '',
  },
};
const TemplateWithIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MInput, MIcon },
  template: `
    <m-input v-bind="$props">
      <m-icon>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </m-icon>
    </m-input>
  `,
});

export const Default = TemplateWithIcon.bind({});
Default.args = {
  id: 'input',
  type: 'text',
  placeholder: 'Default Text Input',
  state: 'error',
};
