<template lang="pug">
  div
    div(v-for="(songs,category) in categoriedSongs" :key="category") 
      h3 {{category}}
      v-chip(color="primary" outlined style="margin: 2px;" v-for="(song,i) in songs" :key="i")
        span.font-weight-bold {{song.title}}
        span(v-if="song.subtitle && song.subtitle.length" style="margin-left: 4px;").text-caption {{`-${song.subtitle}-`}}
</template>

<script>
export default {
  props: {
    master: { type: Object, default: {} },
  },
  data() {
    return {
      songs: '',
    }
  },
  async mounted() {},
  computed: {
    categoriedSongs: function () {
      const ret = {}
      if (this.master.home_page_categories && this.master.songs) {
        for (let category of this.master.home_page_categories) {
          ret[category] = this.master.songs.filter((song) =>
            song.tags.includes(category)
          )
        }
      }
      return ret
    },
  },
  methods: {},
}
</script>

<style>
span {
  display: inline-block;
}
</style>
