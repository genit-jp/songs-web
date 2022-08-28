<template lang="pug">
  v-row(align="center" justify="center" style="margin:0; padding:0;")
    v-col.articleBox.text-body-1(cols="12" md="6" :order="order(0)") 
      div(v-html="description")
    v-col.articleBox(cols="12" md="6" :order="order(1)")
      v-img(:src="image")


</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    swap: { type: Boolean, default: false }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    order(index) {
      let ret = index
      if (this.$vuetify.breakpoint.mdAndUp) {
        ret = index ? 0 : 1
        if (this.swap) {
          ret = ret ? 0 : 1
        }
      }
      return ret
    }
  }
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
