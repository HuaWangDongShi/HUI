import {configure, addParameters, addDecorator} from '@storybook/vue';
import Vue from 'vue';
import '../src/assets/fonts/font.css';
import '../src/assets/style.css';
import HButton from '../src/components/HButton.vue';
import HRow from '../src/components/HRow.vue';
import HCol from '../src/components/HCol.vue';

Vue.component('h-button', HButton);
Vue.component('h-row', HRow);
Vue.component('h-col',HCol);

addParameters({
  docs: {
    inlineStories: true,
  },
});
configure(require.context('../src', true, /\.stories\.js$/), module);
