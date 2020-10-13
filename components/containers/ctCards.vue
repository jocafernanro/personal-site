<template>
  <div class="grid my-10 gap-6" :class="[`grid-cols-${cols}`]">
    <el-card
      v-for="(article, index) in articles"
      :key="index"
      :title="article.title"
      :subtitle="article.subtitle"
      :tags="article.tags"
      :date="article.date"
    ></el-card>
  </div>
</template>

<script>
import elCard from '@/components/elements/elCard'
export default {
  name: 'CtCards',
  components: {
    elCard,
  },
  props: {
    cols: {
      type: Number,
      default: 2,
    },
    articles: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style scoped></style>
