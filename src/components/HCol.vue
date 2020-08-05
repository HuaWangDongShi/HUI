<template>
  <div :class="classes">
    <slot/>
  </div>
</template>
<script>

  import {colOfSizeArgs} from '../utils/screen';

  export default {
    data() {
      return {}
    },
    name: "HCol",
    props: {
      sm: {
        type: [Number, Object],
        default: null
      },
      md: {
        type: [Number, Object],
        default: null
      },
      lg: {
        type: [Number, Object],
        default: null
      },
      xl: {
        type: [Number, Object],
        default: null
      }
    },
    computed: {
      classes() {
        return colOfSizeArgs(this, ["sm", "md", "lg", "xl"])
      }
    }
  }
</script>
