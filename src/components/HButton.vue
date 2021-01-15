<template>
  <button :class="classes">
    <HIcon :type="size" :icon="icon"/>
    <slot/>
  </button>
</template>

<script>
  import HIcon from './HIcon.vue';
  import {oneOfCl, nameMap} from '../utils/assist';

  export default {
    name: 'HButton',
    components: {
      HIcon
    },
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      size: {
        type: String,
        default: 'middle',
      },
      block: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      outline:{
        type:Boolean,
        default: false,
      }
    },
    computed: {
      classes() {
        const name = nameMap[this.type];
        return oneOfCl(name, this.size,this.outline)
      }
    },
    methods: {

    }
  }
</script>


