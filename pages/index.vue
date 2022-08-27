<template lang="pug">
v-layout(
  column
  justify-center
)
  AppBar
  TopImage
  InstallButton
  Section(color="white" title="<span>流れる楽譜を見ながら</span><span>楽器の練習ができる</span>")
    Article(
      description="ああああああああああああああああああああああああああああああああああああああああああああああ"
      image="/images/articles/demo.jpg")
  Section(color="#F6F4F8" title="<span>テンポを変えて</span><span>ゆっくりから練習</span>")
    Article(
      description="ああああああああああああああああああああああああああああああああああああああああああああああ"
      image="/images/articles/tempo.jpg"
      swap=true)
  Section(color="white" title="<span>難しい調の曲も</span><span>移調機能で簡単に！</span>")
    Article(
      description="ああああああああああああああああああああああああああああああああああああああああああああああ"
      image="/images/articles/key.jpg")
  Section(color="#F6F4F8" title="<span>移調楽器にも対応！</span>")
    Article(
      description="ああああああああああああああああああああああああああああああああああああああああああああああ"
      image="/images/articles/instruments.jpg"
      swap=true)
  Section(color="white" title="<span>演奏の録音・録画も</span><span>ボタン一つでかんたん</span>")
    Article(
      description="ああああああああああああああああああああああああああああああああああああああああああああああ"
      image="/images/articles/record.jpg")
  Section(color="#F6F4F8" title="収録楽曲")
    RecordedSongs(songs="songs")
  Section(color="#white" title="無料でお試しできます")
    v-img(src="/images/articles/devices.jpg")
    InstallButton

  v-footer.text-center
    v-spacer
    span GENIT Inc.

</template>

<script>
import TopImage from '~/components/TopImage.vue'
import InstallButton from '~/components/InstallButton.vue'
import Section from '~/components/Section.vue'
import Article from '~/components/Article.vue'
import AppBar from '~/components/AppBar.vue'
import RecordedSongs from '~/components/RecordedSongs.vue'

export default {
  components: {
    TopImage,
    InstallButton,
    Section,
    AppBar,
    Article,
    RecordedSongs
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.mission {
  white-space: pre-line;
}
</style>
