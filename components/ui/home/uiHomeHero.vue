<template>
  <ui-hero
    :title="$t(LANDING_SECTION.TITLE)"
    :hello-code-path="LANDING_SECTION.HELLO_CODE.ROOT"
    :subtitle="$t(LANDING_SECTION.SUBTITLE)"
  >
    <template #buttons>
      <el-button>{{ $t(LANDING_SECTION.BUTTONS.KNOW_ME) }}</el-button>

      <el-button type="secondary">{{
        $t(LANDING_SECTION.BUTTONS.DOWNLOAD_CV)
      }}</el-button>

      <el-button type="secondary">{{
        $t(LANDING_SECTION.BUTTONS.SAY_HELLO)
      }}</el-button>
    </template>
  </ui-hero>
</template>

<script>
import { LOCALES } from '@/utils/constants'

import uiHero from '@/components/ui/uiHero'
import elButton from '@/components/elements/elButton'

export default {
  name: 'UiHomeHero',
  components: {
    uiHero,
    elButton,
  },
  data() {
    return {
      LANDING_SECTION: LOCALES.HOME.LANDING_SECTION,
    }
  },
}
</script>

<style scoped></style>
