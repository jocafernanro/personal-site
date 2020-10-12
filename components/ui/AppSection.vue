<template>
  <section
    class="max-w-6xl mx-auto py-10"
    :class="[textFormat, wideFormat, backgroundColor]"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    isWideFull: {
      type: Boolean,
      default: false,
    },
    isBackgroundGray: {
      type: Boolean,
      default: false,
    },
    isTextCentered: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    textFormat() {
      return this.isTextCentered ? 'text-center' : 'text-justify'
    },
    wideFormat() {
      return this.isWideFull ? 'max-w-full' : 'max-w-6xl'
    },
    backgroundColor() {
      return this.isBackgroundGray ? 'bg-secondary-lighter' : 'bg-white'
    },
  },
}
</script>

<style></style>
