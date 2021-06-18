// import i18n from "./config/i18n";

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    title: 'SmartPoint',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    // link: [
    //   {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    // ]
    script: [
      {
        hid: 'SpaceinWidget',
        innerHTML: `
          (function (d, w, c) {
            (w[c] = w[c] || []).push(function () {
              try {
                w.SpaceinWidget = Spacein.init(1);
              } catch (e) {
              }
            });
            var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () {
              n.parentNode.insertBefore(s, n)
            };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://smartpoint.spacepass.pro/js/widget.js";
            (w.opera === "[object Opera]") ? d.addEventListener("DOMContentLoaded", f, false) : f();
          })(document, window, "spacein_cb");
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: "~/plugins/defaultPlugin", mode: "client"},
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // [
    //   'nuxt-i18n',
    //   {
    //     locales: [
    //       {
    //         code: 'ru',
    //         name: 'Russian'
    //       },
    //       {
    //         code: 'kz',
    //         name: 'Kazakh'
    //       },
    //       {
    //         code: 'en',
    //         name: 'English'
    //       }
    //     ],
    //     defaultLocale: 'ru',
    //     vueI18n: i18n,
    //     strategy: 'prefix_except_default',
    //   }
    // ]
  ],
  /*
  ** Nuxt.js modules
  */
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  env: {
    API_URL: 'http://185.121.81.137/api/',
    INST_TOKEN: 'IGQVJWU2tGeXN6U2lNd1QtQ3BBTHhQQ3poY0N2T3lrSkxRaEdOZAHRreFdRZAmNxY2hSTndldFV5VnQtRElsRTJzSkw0cG5hTnFoc2tTSUl1Nng2M0RURmdYOFl5SEc3cEJUZAHlxWXY0Y2ZA6X1BFcC1DcgZDZD'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},
  router: {
    linkActiveClass: 'active_link',
    linkExactActiveClass: 'exact_active_link',
  },
}
