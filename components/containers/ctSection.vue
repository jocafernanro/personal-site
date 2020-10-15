<template>
  <section
    class="mx-auto p-10"
    :class="[textFormat, wideFormat, backgroundColor]"
  >
    <div class="mx-auto" :class="contentWideFormat">
      <el-title v-if="title"> {{ title }} </el-title>
      <el-subtitle v-if="subtitle"> {{ subtitle }} </el-subtitle>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import elTitle from '@/components/elements/elTitle'
import elSubtitle from '@/components/elements/elSubtitle'
export default {
  name: 'CtSection',
  components: {
    elTitle,
    elSubtitle,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
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
      return this.isTextCentered ? 'text-center' : 'text-left'
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
