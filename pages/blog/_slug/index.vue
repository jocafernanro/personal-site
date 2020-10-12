<template>
  <div class="container mx-auto pt-6">
    <article v-if="post">
      <header class="grid grid-cols-2 gap-4 mb-12 rounded shadow-lg p-4">
        <img :src="post.media" alt="post.title" />
        <div class="">
          <h2 class="text-lg font-bold text-gray-800 mb-2">{{ post.title }}</h2>
          <p class="text-sm text-gray-700">
            {{ $t('also-available-in') }}
            <nuxt-link
              v-for="lang in otherLanguages"
              :key="lang.locale"
              class="uppercase text-teal-600 hover:text-teal-800"
              :to="lang.path"
            >
              {{ lang.locale }}
            </nuxt-link>
          </p>
        </div>
      </header>
      <nuxt-content class="text-gray-800" :document="post" />
    </article>
  </div>
</template>
<script>
export default {
  name: 'Post',
  async asyncData(context) {
    const { $content, params, app } = context
    const slug = params.slug
    const post = await $content(`${app.i18n.locale}/blog`, slug).fetch()

    return {
      post,
    }
  },
  computed: {
    otherLanguages() {
      return this.post.otherLanguages || []
    },
  },
  head() {
    return {
      title: this.post.title,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: this.post.title,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.media,
        },
      ],
    }
  },
}
</script>
