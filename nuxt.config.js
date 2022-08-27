import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: '株式会社GENIT - アプリ/Web/プログラム/デザイン/音楽の制作会社',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '神戸のアプリ/Web/プログラム/デザイン/音楽の制作会社'
      },
      { property: 'og:title', content: '株式会社GENIT' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.genit.jp/' },
      { property: 'og:image', content: 'https://www.genit.jp/images/ogp.png' },
      { property: 'og:site_name', content: '株式会社GENIT' },
      {
        property: 'og:description',
        content: '神戸のアプリ/Web/プログラム/デザイン/音楽の制作会社'
      },
      { property: 'fb', content: '484405062242157' },
      { property: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    script: [{ src: 'pixel.js', type: 'text/javascript' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/scrollto'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['M+PLUS+1p']
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */ axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    defaultAssets: {
      icons: false
    },
    icons: {
      iconfont: 'mdiSvg'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    dir: 'public'
  }
}
