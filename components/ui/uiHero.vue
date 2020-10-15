<template>
  <ct-section is-text-centered>
    <el-main-title>{{ title }}</el-main-title>

    <i18n
      v-if="helloCodePath"
      :path="`${helloCodePath}.text`"
      tag="p"
      class="text-primary font-semibold text-xl font-space-mono"
    >
      <template v-slot:name>
        <b>{{ $t(`${helloCodePath}.name`) }}</b>
      </template>

      <template v-slot:opt1>
        <b>{{ $t(`${helloCodePath}.opt1`) }}</b>
      </template>

      <template v-slot:opt2>
        <b>{{ $t(`${helloCodePath}.opt2`) }}</b>
      </template>

      <template v-slot:location>
        <b>{{ $t(`${helloCodePath}.location`) }}</b>
      </template>
    </i18n>

    <el-main-subtitle>{{ subtitle }}</el-main-subtitle>
    <ct-buttons>
      <slot name="buttons"></slot>
    </ct-buttons>
  </ct-section>
</template>

<script>
import ctSection from '@/components/containers/ctSection'
import ctButtons from '@/components/containers/ctButtons'

import elMainTitle from '@/components/elements/elMainTitle'
import elMainSubtitle from '@/components/elements/elMainSubtitle'

export default {
  name: 'UiHero',
  components: {
    ctSection,
    ctButtons,

    elMainTitle,
    elMainSubtitle,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    helloCodePath: {
      type: String,
      default: '',
    },
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
