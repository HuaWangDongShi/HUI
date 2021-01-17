import {configure, addParameters, addDecorator} from '@storybook/vue';
import Vue from 'vue';
import '../src/assets/fonts/font.css';
import '../src/assets/style.css';
import 'animate.css'
import HButton from '../src/components/HButton';
import HRow from '../src/components/HRow';
import HCol from '../src/components/HCol';
import HSearch from '../src/components/HSearch';

Vue.component('h-button', HButton);
Vue.component('h-row', HRow);
Vue.component('h-col',HCol);
Vue.component('h-search',HSearch);

addParameters({
  docs: {
    inlineStories: true,
  },
});
configure(require.context('../src', true, /\.stories\.js$/), module);
