<template lang="pug">
v-layout(
  column
  justify-center
)
  AppBar
  TopImage
  InstallButton
  Section(color="white" title="<span>楽器演奏者のための</span><span>カラオケアプリ</span>")
    Article(
      description="今までなかった楽器演奏者のためのカラオケアプリです。<br/>一般のカラオケアプリの歌詞の代わりに楽譜を表示することで楽器演奏者でも楽しくカラオケを楽しむことができます。"
      image="/images/articles/devices.png"
      swap=false)
  Section(color="#F6F4F8" title="<span>流れる楽譜と</span><span>バンドによる伴奏</span>")
    Article(
      description="再生ボタンを押すとその楽曲の伴奏が再生され、曲の進行に合わせて自動で楽譜が流れていきます。<br/>もちろん一時停止したり、カーソルを移動することで部分的に練習することもできます。"
      image="/images/articles/demo.gif",
      swap=true)
  Section(color="white" title="<span>テンポを変えて</span><span>ゆっくりから練習</span>")
    Article(
      description="すべての曲のテンポを自由に変えることができます。<br/>ゆっくりからはじめ、徐々に早くしていく練習をすることができます。"
      image="/images/articles/tempo.png"
      swap=false)
  Section(color="#F6F4F8" title="<span>難しいキーの曲も</span><span>移調機能で簡単に！</span>")
    Article(
      description="各楽器の音域に合わせたキーに変更したり、フラットが6つの「変ト長調」の楽曲を半音上げて簡単なシャープ1つの「ト長調」へと簡単にキーの変更することができます。<br/>"
      image="/images/articles/key.png"
      swap=true)
  Section(color="white" title="<span>移調楽器にも対応！</span>")
    Article(
      description="移調楽器の設定をすると、伴奏のキーは変更せずに、表示される楽譜のキーのみを変更することができます。"
      image="/images/articles/instruments.png"
      swap=false)
  Section(color="#F6F4F8" title="<span>楽曲はリクエストから続々追加中！</span>")
    Article(
      description="あなたの演奏したい楽曲を是非教えて下さい！リクエストいただいた曲から日々続々と追加しています。"
      image="/images/articles/request.png"
      swap=true)
  //- Section(color="white" title="<span>演奏の録音・録画も</span><span>ボタン一つでかんたん</span>")
  //-   Article(
  //-     description="ああああああああああああああああああああああああああああああああああああああああああああああ"
  //-     image="/images/articles/record.jpg")
  Section(color="white" title="無料でお試しできます")
    Article(
      image="/images/articles/devices.png"
      swap=true)
    InstallButton
  Section(color="#F6F4F8" title="収録楽曲")
    RecordedSongs(:master="master")

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
    RecordedSongs,
  },
  data() {
    return {
      master: {},
    }
  },
  async mounted() {
    const response = await this.$axios.$get(
      'https://d269pef58q3jdf.cloudfront.net/v1/master.json'
    )
    this.master = response
  },
}
</script>
<style scoped>
.mission {
  white-space: pre-line;
}
</style>
