<template>
  <ct-section is-wide-full is-content-wide-full>
    <div class="rounded-lg landing-image"></div>
  </ct-section>
</template>

<script>
import ctSection from '@/components/containers/ctSection'

export default {
  name: 'UiHomeWideImage',
  components: {
    ctSection,
  },
}
</script>

<style scoped>
.landing-image {
  background-image: url('~assets/images/home-landing.jpg');
  height: 40rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
