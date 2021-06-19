<template>
  <button
    class="px-7 py-3 border rounded text-white opacity-80 focus:outline-none"
    :type="type"
    :class="state.classes"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from '@vue/composition-api'

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
      validator: (value: string) => {
        return ['submit', 'reset', 'button'].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: String,
      default: 'base',
      validator: (value: string) => {
        return ['base', 'xs', 'sm', 'lg', 'xl'].includes(value)
      }
    },
    color: {
      type: String,
      default: 'blue',
      validator: (value: string) => {
        return ['blue', 'indigo', 'yellow', 'green', 'red', 'gray'].includes(value)
      }
    }
  },
  setup (props: any) {
    const state = reactive({
      classes: computed(() => {
        const classes = []
        classes.push(props.type)
        classes.push('hover:bg-' + props.color + '-600')
        classes.push('hover:text-white')
        classes.push('text-' + props.color + '-600')
        classes.push('text-' + props.fontSize)
        classes.push('border-' + props.color + '-600')
        return classes.join(' ')
      })
    })
    return { state }
  }
})
</script>
