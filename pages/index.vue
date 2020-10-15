<template>
  <div>
    <ui-home-hero />
    <ui-home-wide-image />
    <ui-home-what-i-blog />
    <ui-home-what-i-code />
  </div>
</template>

<script>
import uiHomeHero from '@/components/ui/home/uiHomeHero'
import uiHomeWideImage from '@/components/ui/home/uiHomeWideImage'
import uiHomeWhatIBlog from '@/components/ui/home/uiHomeWhatIBlog'
import uiHomeWhatICode from '@/components/ui/home/uiHomeWhatICode'

export default {
  components: {
    uiHomeHero,
    uiHomeWideImage,
    uiHomeWhatIBlog,
    uiHomeWhatICode,
  },
}
</script>

<style scoped></style>
