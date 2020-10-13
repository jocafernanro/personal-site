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

      <template #subtitle>
        {{ $t('home.landing-section.subtitle') }}
      </template>

      <template #buttons>
        <el-button>{{ $t('home.landing-section.buttons.know-me') }}</el-button>

        <el-button type="secondary">{{
          $t('home.landing-section.buttons.download-cv')
        }}</el-button>

        <el-button type="secondary">{{
          $t('home.landing-section.buttons.say-hello')
        }}</el-button>
      </template>
    </ui-hero>

    <ui-home-wide-image />

    <ui-home-what-i-blog />

    <ui-home-what-i-code />
  </div>
</template>

<script>
import elButton from '@/components/elements/elButton'
import uiHero from '@/components/ui/uiHero'
import uiHomeWideImage from '@/components/ui/home/uiHomeWideImage'
import uiHomeWhatIBlog from '@/components/ui/home/uiHomeWhatIBlog'
import uiHomeWhatICode from '@/components/ui/home/uiHomeWhatICode'

export default {
  components: {
    elButton,
    uiHero,
    uiHomeWideImage,
    uiHomeWhatIBlog,
    uiHomeWhatICode,
  },
}
</script>

<style scoped></style>
