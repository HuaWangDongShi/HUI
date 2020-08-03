<template>
  <div class="container" :class="classes">
    <slot/>
  </div>
</template>
<script>

  import {screen} from '../utils/screen';

  export default {
    data() {
      return {}
    },
    props: {
      align: {
        type: String,
        default: "top"
      },
      justify: {
        type: String,
        default: 'start'
      }
    },
    computed: {
      classes() {
        return screen(this.align, this.justify)
      }
    }
  }
</script>
