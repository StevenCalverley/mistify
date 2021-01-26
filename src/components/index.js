import { pluginFactory } from '../utils/plugins';

import { BadgePlugin } from './MBadge';
import { ButtonPlugin } from './MButton';
import { IconPlugin } from './MIcon';
import { InputPlugin } from './MInput';
import { InputGroupPlugin } from './MInputGroup';
import { SelectPlugin } from './MSelect';

// Main plugin to install all component group plugins
export const componentsPlugin = /*#__PURE__*/ pluginFactory({
  plugins: {
    BadgePlugin,
    ButtonPlugin,
    IconPlugin,
    InputPlugin,
    InputGroupPlugin,
    SelectPlugin,
  },
});
