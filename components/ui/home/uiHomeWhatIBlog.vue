<template>
  <ct-section>
    <el-title>
      {{ $t('home.what-i-write.title') }}
    </el-title>

    <el-subtitle>
      {{ $t('home.what-i-write.subtitle') }}
    </el-subtitle>

    <ct-cards :articles="articles" />
  </ct-section>
</template>

<script>
import ctSection from '@/components/containers/ctSection'
import ctCards from '@/components/containers/ctCards'
import elTitle from '@/components/elements/elTitle'
import elSubtitle from '@/components/elements/elSubtitle'

export default {
  name: 'UiHomeWhatIBlog',
  components: {
    ctSection,
    ctCards,

    elTitle,
    elSubtitle,
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
