<template>
  <ct-section>
    <el-title>
      {{ $t(CODE.TITLE) }}
    </el-title>

    <el-subtitle>
      {{ $t(CODE.SUBTITLE) }}
    </el-subtitle>

    <ct-cards :articles="articles" />

    <el-button>
      {{ $t(READ_MORE) }}
    </el-button>
  </ct-section>
</template>

<script>
import { LOCALES } from '@/utils/constants'
import ctSection from '@/components/containers/ctSection'
import ctCards from '@/components/containers/ctCards'
import elTitle from '@/components/elements/elTitle'
import elSubtitle from '@/components/elements/elSubtitle'
import elButton from '@/components/elements/elButton'

export default {
  name: 'UiHomeWhatICode',
  components: {
    ctSection,
    ctCards,

    elTitle,
    elSubtitle,
    elButton,
  },
  data() {
    return {
      CODE: LOCALES.HOME.WHAT_I_CODE,
      READ_MORE: LOCALES.READ_MORE,
      articles: [
        {
          title: 'Como instalar hyper.js en windows',
          subtitle: 'Sigue estos sencillos pasos para instalarlo rápidamente.',
          tags: ['tecnología', 'tutorial'],
          date: '12 Marzo 2020',
        },
        {
          title: 'Como instalar hyper.js en windows',
          subtitle: 'Sigue estos sencillos pasos para instalarlo rápidamente.',
          tags: ['tecnología', 'tutorial'],
          date: '12 Marzo 2020',
        },
        {
          title: 'Como instalar hyper.js en windows',
          subtitle: 'Sigue estos sencillos pasos para instalarlo rápidamente.',
          tags: ['tecnología', 'tutorial'],
          date: '12 Marzo 2020',
        },
        {
          title: 'Como instalar hyper.js en windows',
          subtitle: 'Sigue estos sencillos pasos para instalarlo rápidamente.',
          tags: ['tecnología', 'tutorial'],
          date: '12 Marzo 2020',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
