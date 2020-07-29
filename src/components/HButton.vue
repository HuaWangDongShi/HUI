<template>
  <button :class="classes">
    <HIcon :type="type" :icon="icon"/>
    <slot/>
  </button>
</template>

<script>
  import HIcon from './HIcon';
  import {oneOfCl,nameMap} from '../utils/assist';

  export default {
    name: 'HButton',
    components:{
      HIcon
    },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'middle'
      },
      block: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      classes() {
        const name = nameMap[this.type];
        return oneOfCl(name,this.size)
      }
    }
  }
</script>


