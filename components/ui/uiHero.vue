<template>
  <ct-section is-text-centered>
    <el-main-title><slot name="title"></slot></el-main-title>
    <slot name="interline"></slot>
    <el-main-subtitle><slot name="subtitle"></slot></el-main-subtitle>
    <ct-buttons>
      <el-button><slot name="main-button"></slot></el-button>
      <el-button><slot name="secondary-button"></slot></el-button>
      <el-button><slot name="extra-button"></slot></el-button>
    </ct-buttons>
  </ct-section>
</template>

<script>
import ctSection from '@/components/containers/ctSection'
import ctButtons from '@/components/containers/ctButtons'

import elMainTitle from '@/components/elements/elMainTitle'
import elMainSubtitle from '@/components/elements/elMainSubtitle'
import elButton from '@/components/elements/elButton'

export default {
  name: 'UiHero',
  components: {
    ctSection,
    ctButtons,

    elMainTitle,
    elMainSubtitle,
    elButton,
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
