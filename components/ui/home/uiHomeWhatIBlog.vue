<template>
  <ct-section :title="$t(BLOG.TITLE)" :subtitle="$t(BLOG.SUBTITLE)">
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
import elButton from '@/components/elements/elButton'

export default {
  name: 'UiHomeWhatIBlog',
  components: {
    ctSection,
    ctCards,
    elButton,
  },
  data() {
    return {
      BLOG: LOCALES.HOME.WHAT_I_WRITE,
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
