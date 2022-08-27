<template lang="pug">
  v-container(style="padding:0px;")
    v-row(align="center" justify="center" style="margin:0; padding:0;")
      v-col(cols="5")
        a(href="" target="_blank")
          v-img(
          src="images/badges/ios.svg"
          max-height="80"
          contain
        )
      v-col(cols="6")
        a(href="" target="_blank")
          v-img(
          src="images/badges/android.png"
          max-height="80"
          contain
        )
      span.text-right.text-caption ダウンロード無料 / 有料会員:月額1200円
</template>
<script>
export default {}
</script>
