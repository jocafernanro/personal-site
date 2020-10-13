<template>
  <section
    class="mx-auto p-10"
    :class="[textFormat, wideFormat, backgroundColor]"
  >
    <div class="mx-auto" :class="contentWideFormat">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtSection',
  props: {
    isWideFull: {
      type: Boolean,
      default: false,
    },
    isContentWideFull: {
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
      return this.isWideFull ? 'w-full' : 'container'
    },
    contentWideFormat() {
      return this.isContentWideFull ? 'w-full' : 'max-w-6xl'
    },
    backgroundColor() {
      return this.isBackgroundGray ? 'bg-secondary-lighter' : 'bg-white'
    },
  },
}
</script>
