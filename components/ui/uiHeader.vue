<template>
  <header class="container mx-auto py-8 flex flex-row justify-between">
    <div>josematico</div>
    <nav class="relative">
      <ul>
        <li class="menu-item text-secundary">
          {{ $t(NAV.SOON.COURSES) }}
        </li>
      </ul>
      <span
        class="absolute top-0 -mt-4 ml-6 text-xs text-secundary tracking-widest"
        >{{ soonNavText }}</span
      >
    </nav>
    <nav>
      <ul class="flex flex-row">
        <li class="menu-item">{{ $t(NAV.HOME) }}</li>
        <li class="menu-item">{{ $t(NAV.ABOUT_ME) }}</li>
        <li class="menu-item">{{ $t(NAV.BLOG) }}</li>
        <li class="menu-item">{{ $t(NAV.CONTACT) }}</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { LOCALES } from '@/utils/constants'

export default {
  name: 'UiHeader',
  data() {
    return {
      NAV: LOCALES.HEADER.NAV,
    }
  },
  computed: {
    soonNavText() {
      return this.$t(this.NAV.SOON.TEXT).toUpperCase()
    },
  },
}
</script>

<style scoped>
.menu-item {
  @apply font-bold;
  @apply text-xl;
  @apply ml-6;
  @apply cursor-pointer;
}
</style>
