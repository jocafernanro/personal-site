<template>
  <ct-section>
    <el-title>
      {{ $t('home.what-i-code.title') }}
    </el-title>

    <el-subtitle>
      {{ $t('home.what-i-code.subtitle') }}
    </el-subtitle>

    <ct-cards :articles="articles" />

    <el-button>
      {{ $t('read-more') }}
    </el-button>
  </ct-section>
</template>

<script>
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
