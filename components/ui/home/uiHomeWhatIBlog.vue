<template>
  <ct-section is-background-gray is-wide-full>
    <el-title>
      {{ $t('home.what-i-write.title') }}
    </el-title>
    <el-subtitle>
      {{ $t('home.what-i-write.subtitle') }}
    </el-subtitle>
  </ct-section>
</template>

<script>
import ctSection from '@/components/containers/ctSection'
import elTitle from '@/components/elements/elTitle'
import elSubtitle from '@/components/elements/elSubtitle'

export default {
  name: 'UiHomeWhatIBlog',
  components: {
    ctSection,

    elTitle,
    elSubtitle,
  },
}
</script>

<style scoped></style>
