<template>
  <footer class="bg-secondary-lighter">
    <div class="container p-16 mx-auto">
      <el-title>{{ $t('footer.title') }}</el-title>
      <el-subtitle>{{ $t('footer.subtitle') }}</el-subtitle>
    </div>
  </footer>
</template>

<script>
import elTitle from '@/components/elements/elTitle'
import elSubtitle from '@/components/elements/elSubtitle'

export default {
  name: 'UiFooter',
  components: {
    elTitle,
    elSubtitle,
  },
}
</script>

<style scoped></style>
