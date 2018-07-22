import cutout from './components'
const install = function (Vue) {
  Vue.component('cutout', cutout);
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
};



