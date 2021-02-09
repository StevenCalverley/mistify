import { pluginFactory } from '../../utils/plugins';
import MCheckboxItem from './MCheckboxItem.vue';
import MCheckbox from './MCheckbox.vue';

const CheckboxPlugin = /*#__PURE__*/ pluginFactory({
  components: { MCheckbox, MCheckboxItem },
});

export { CheckboxPlugin, MCheckbox, MCheckboxItem };
