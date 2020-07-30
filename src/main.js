import HButton from './components/HButton.vue';


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

function install (Vue) {
  Vue.component('h-button', HButton);
}

export default {
  install,
  HButton
}
