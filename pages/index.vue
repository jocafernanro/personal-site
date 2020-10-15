<template>
  <div>
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

    <ui-home-wide-image />

    <ui-home-what-i-blog />

    <ui-home-what-i-code />
  </div>
</template>

<script>
import { LOCALES } from '@/utils/constants'

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
  data() {
    return {
      LANDING_SECTION: LOCALES.HOME.LANDING_SECTION,
    }
  },
}
</script>

<style scoped></style>
