<template>
  <header class="container mx-auto py-8 flex flex-row justify-between">
    <div>josematico</div>
    <nav class="relative">
      <ul>
        <li class="menu-item text-secundary">
          {{ $t('header.nav.soon.courses') }}
        </li>
      </ul>
      <span
        class="absolute top-0 -mt-4 ml-6 text-xs text-secundary tracking-widest"
        >{{ soonNavText }}</span
      >
    </nav>
    <nav>
      <ul class="flex flex-row">
        <li class="menu-item">{{ $t('header.nav.home') }}</li>
        <li class="menu-item">{{ $t('header.nav.about-me') }}</li>
        <li class="menu-item">{{ $t('header.nav.blog') }}</li>
        <li class="menu-item">{{ $t('header.nav.contact') }}</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'UiHeader',
  computed: {
    soonNavText() {
      return this.$t('header.nav.soon.text').toUpperCase()
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
