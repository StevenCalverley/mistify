import { installFactory } from './utils/plugins';
import { componentsPlugin } from './components';

const NAME = 'Mistify';

// --- Mistify installer ---
const install = /*#__PURE__*/ installFactory({
  plugins: {
    componentsPlugin,
  },
});

// Create module definition for Vue.use()
// --- Mistify plugin ---
const Mistify = /*#__PURE__*/ {
  install,
  NAME,
};

// Default export is library as a whole, registered via Vue.use()
export default Mistify;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Mistify);
}
