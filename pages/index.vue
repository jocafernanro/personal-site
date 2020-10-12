<template>
  <div>
    <app-section is-text-centered>
      <main-title>{{ $t('home.landing-section.title') }}</main-title>
      <p
        class="text-primary font-semibold text-xl font-space-mono"
        v-html="$t('home.landing-section.hello-code')"
      ></p>
      <main-subtitle>{{ $t('home.landing-section.subtitle') }}</main-subtitle>
      <app-buttons-section>
        <main-button>{{
          $t('home.landing-section.buttons.know-me')
        }}</main-button>
        <main-button type="secondary">{{
          $t('home.landing-section.buttons.download-cv')
        }}</main-button>
        <main-button type="secondary">{{
          $t('home.landing-section.buttons.say-hello')
        }}</main-button>
      </app-buttons-section>
    </app-section>

    <app-section>hola</app-section>
  </div>
</template>

<script>
import AppSection from '@/components/ui/AppSection'
import AppButtonsSection from '@/components/ui/AppButtonsSection'

import MainButton from '@/components/elements/MainButton'
import MainSubtitle from '@/components/elements/MainSubtitle'
import MainTitle from '@/components/elements/MainTitle'

export default {
  components: {
    AppSection,
    AppButtonsSection,
    MainButton,
    MainSubtitle,
    MainTitle,
  },
}
</script>

<style></style>
