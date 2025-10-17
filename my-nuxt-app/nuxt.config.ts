// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // ❌ 以前の誤ったCDN指定を削除
  // css: [
  //   'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
  // ],
  
  // ✅ 外部CSSを読み込む正しい場所
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
          // integrityとcrossoriginはセキュリティ上推奨されますが、動作確認のため省略可能
        },
      ],
    },
  },

  modules: ['@nuxt/scripts', '@nuxt/ui']
})