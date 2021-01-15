import { pluginFactory } from '../../utils/plugins';
import MBadge from './MBadge.vue';

const BadgePlugin = /*#__PURE__*/ pluginFactory({
  components: { MBadge },
});

export { BadgePlugin, MBadge };
