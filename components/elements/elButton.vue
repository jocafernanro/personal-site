<template>
  <button
    class="mr-2 font-semibold text-lg px-5 py-3 rounded-lg"
    :class="[bgColor, textColor]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return value.includes('primary') || value.includes('secondary')
      },
    },
    linkTo: {
      type: String,
      default: '',
    },
  },
  computed: {
    textColor() {
      return this.type && this.type === 'primary'
        ? 'text-white'
        : 'text-primary'
    },
    bgColor() {
      return this.type && this.type === 'primary'
        ? 'bg-primary'
        : 'bg-secondary-light'
    },
  },
}
</script>

<style scoped></style>
