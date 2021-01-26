import { pluginFactory } from '../../utils/plugins';
import MSelect from './MSelect.vue';
import MSelectOption from './MSelectOption.vue';

const SelectPlugin = /*#__PURE__*/ pluginFactory({
  components: { MSelect, MSelectOption },
});

export { SelectPlugin, MSelect, MSelectOption };
