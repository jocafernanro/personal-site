<template>
  <footer class="bg-secondary-lighter">
    <div class="container p-16 mx-auto">
      <el-title>{{ $t(FOOTER.TITLE) }}</el-title>
      <el-subtitle>{{ $t(FOOTER.SUBTITLE) }}</el-subtitle>
    </div>
  </footer>
</template>

<script>
import { LOCALES } from '@/utils/constants'
import elTitle from '@/components/elements/elTitle'
import elSubtitle from '@/components/elements/elSubtitle'

export default {
  name: 'UiFooter',
  components: {
    elTitle,
    elSubtitle,
  },
  data() {
    return {
      FOOTER: LOCALES.FOOTER,
    }
  },
}
</script>

<style scoped></style>
