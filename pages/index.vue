<template>
  <div>
    <ui-hero>
      <template #title>
        {{ $t('home.landing-section.title') }}
      </template>

      <template #interline>
        <p
          class="text-primary font-semibold text-xl font-space-mono"
          v-html="$t('home.landing-section.hello-code')"
        ></p>
      </template>

      <template #subtitle>{{ $t('home.landing-section.subtitle') }}</template>

      <template #main-button>
        {{ $t('home.landing-section.buttons.know-me') }}
      </template>

      <template #secondary-button>
        {{ $t('home.landing-section.buttons.download-cv') }}
      </template>

      <template #extra-button>
        {{ $t('home.landing-section.buttons.say-hello') }}
      </template>
    </ui-hero>

    <ui-home-wide-image />

    <ui-home-what-i-blog />
  </div>
</template>

<script>
import uiHero from '@/components/ui/uiHero'
import uiHomeWideImage from '@/components/ui/home/uiHomeWideImage'
import uiHomeWhatIBlog from '@/components/ui/home/uiHomeWhatIBlog'

export default {
  components: {
    uiHero,
    uiHomeWideImage,
    uiHomeWhatIBlog,
  },
}
</script>

<style scoped></style>
