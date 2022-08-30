<template lang="pug">
  v-row(align="center" justify="center" style="margin:0; padding:0;")
    v-carousel(:height="height" cycle interval="5000" hide-delimiter-background :show-arrows="false")
      v-carousel-item(v-for="(image,i) in images" :key="i")
        div(:style="`width:100%; height:100%; background-size:cover; background-position:center; background-image:url(${image})`")
          div.topText.font-weight-black.text-center.white--text(:style="`font-size:${textSize}px; transform: translate(0, ${height/1.5}px)`" v-html="texts[i]")
    
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/images/top/0.jpg',
        '/images/top/1.jpg',
        '/images/top/2.jpg',
        '/images/top/3.jpg',
      ],
      texts: [
        '<span>楽器演奏者向けの</span><span>カラオケアプリ</span>',
        '<span>楽譜＆伴奏で</span><span>楽しく演奏</span>',
        '<span>J-POPからスタンダードまで</span><span>幅広く収録！</span>',
        '<span>調やテンポを</span><span>カスタマイズ</span>',
      ],
      height: 300,
      textSize: 30,
    }
  },
  async mounted() {
    window.addEventListener('resize', this.handleResize)
    this.updateSize()
  },
  methods: {
    handleResize() {
      this.updateSize()
    },
    updateSize() {
      this.height = (window.innerWidth / 4) * 3
      if (this.height > 800) {
        this.height = 800
      }
      this.textSize = this.height / 10
    },
  },
}
</script>
<style>
.topImage {
  display: flex;
  justify-content: center;
  align-items: center;
}
.topText {
  text-shadow: 2px 2px 10px black;
}
</style>
