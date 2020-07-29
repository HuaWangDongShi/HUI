<template>
  <i :class="[icon,type]"></i>
</template>
<script>
  import {fontSizeMap} from '../utils/assist';

  export default {
    props: {
      icon: {
        type: String,
        default: null
      },
      type: {
        type: String,
        default: 'small'
      }
    },
    computed: {
      classes() {
        return fontSizeMap[this.type];
      }
    }
  }
</script>
