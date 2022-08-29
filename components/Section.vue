<template lang="pug">
  v-row(
    :id="id"
    :style="`margin:0; background-color:${color}`"
  )
    v-container(style="padding:0px;")
      v-col(cols="12" style="padding:4em 1em 4em 1em")
        h3(style="padding:0em 0em 1em 0em").text-sm-h3.text-lg-h2.text-h4.text-center.font-weight-bold.artileTitle(v-html="title")
        slot
</template>
<script>
export default {
  props: {
    id: { type: String, default: '' },
    color: { type: String, default: '' },
    title: { type: String, default: '' }
  }
}
</script>
<style></style>
