<template>
  <div class="">
    <ui-header />
    <Nuxt />
    <ui-footer />
  </div>
</template>

<script>
import uiHeader from '@/components/ui/uiHeader'
import uiFooter from '@/components/ui/uiFooter'
export default {
  name: 'Default',
  components: {
    uiHeader,
    uiFooter,
  },
}
</script>

<style>
:root {
  --global-font-family: 'Manrope', 'Helvetica Neue', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  --global-secundary-font-family: 'Space Mono', 'Helvetica Neue', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  --global-font-size: 1rem;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
}
html,
body {
  font-family: var(--global-font-family);
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
input:focus {
  @apply outline-none;
}
.no-outline:focus {
  outline: 0;
}

.font-manrope {
  font-family: var(--global-font-family);
}

.font-space-mono {
  font-family: var(--global-secundary-font-family);
}
</style>
