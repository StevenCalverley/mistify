// .storybook/manager.js

import { addons } from '@storybook/addons';
import mistify from './mistify';

addons.setConfig({
  theme: mistify,
});
