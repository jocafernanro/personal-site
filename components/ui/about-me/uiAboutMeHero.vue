<template>
  <ui-hero :title="$t(HERO.TITLE)" :subtitle="$t(HERO.SUBTITLE)">
    <template #buttons>
      <el-button>{{ $t(HERO.BUTTONS.KNOW_ME) }}</el-button>

      <el-button type="secondary">{{ $t(HERO.BUTTONS.DOWNLOAD_CV) }}</el-button>

      <el-button type="secondary">{{ $t(HERO.BUTTONS.SAY_HELLO) }}</el-button>
    </template>
  </ui-hero>
</template>

<script>
import { LOCALES } from '@/utils/constants'
import uiHero from '@/components/ui/uiHero'
import elButton from '@/components/elements/elButton'
export default {
  name: 'UiAboutMeHero',
  components: {
    uiHero,
    elButton,
  },
  data() {
    return {
      HERO: LOCALES.ABOUT_ME.HERO,
    }
  },
}
</script>

<style scoped></style>
