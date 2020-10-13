<template>
  <article
    class="flex flex-col justify-between py-6 px-8 h-64 bg-white rounded-lg border border-secondary-light"
  >
    <header>
      <h3 class="font-bold text-3xl leading-tight tracking-normal">
        {{ title }}
      </h3>
      <p class="font-semibold text-secondary text-2xl">
        {{ subtitle }}
      </p>
    </header>
    <div class="flex flex-row justify-between items-center my-4">
      <div>
        <el-tag v-for="(tag, index) in tags" :key="index">{{
          tagToUpperCase(tag)
        }}</el-tag>
      </div>
      <span>{{ date }}</span>
    </div>
  </article>
</template>

<script>
import elTag from '@/components/elements/elTag'

export default {
  name: 'ElCard',
  components: {
    elTag,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => [],
    },
    date: {
      type: String,
      default: '',
    },
  },
  methods: {
    tagToUpperCase(tag) {
      return tag.toUpperCase()
    },
  },
}
</script>

<style scoped></style>
