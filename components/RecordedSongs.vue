<template lang="pug">
  v-sheet(color="white"
          elevation="1"
          rounded
          shaped
          width="100%"
          style="padding:2em"
          )
    h3 後で見やすくする
    div {{songs}}
</template>

<script>
export default {
  props: {},
  data() {
    return {
      songs: ''
    }
  },
  async mounted() {
    const response = await this.$axios.$get(
      'https://d269pef58q3jdf.cloudfront.net/v1/master.json'
    )
    const songTitles = response.songs.map(song => song.title)
    this.songs = songTitles.join('/')
  },
  computed: {},
  methods: {}
}
</script>

<style>
span {
  display: inline-block;
}
.articleBox {
  padding: 2em;
}
</style>
