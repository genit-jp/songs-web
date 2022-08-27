<template lang="pug">
  v-app-bar(
    fixed
    color="#00000000"
    elevation="0"
  )
    v-img(
      max-height="40"
      max-width="40"
      contain
      src="images/icon.png"
    )
    v-toolbar-title(style="text-shadow: 1px 1px 2px white;")
      h1.headline.font-weight-bold 楽譜カラオケ
</template>
<script>
export default {
  data: () => {
    return {}
  },
  methods: {}
}
</script>

<style></style>
