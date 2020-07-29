import {configure, addParameters, addDecorator} from '@storybook/vue';
import Vue from 'vue';
import '../src/assets/style.css';
import HButton from '../src/components/HButton.vue';

Vue.component('y-button', HButton);

addParameters({
  docs: {
    inlineStories: true,
  },
});
configure(require.context('../src', true, /\.stories\.js$/), module);
