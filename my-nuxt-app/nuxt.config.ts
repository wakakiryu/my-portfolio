// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Tailwind CSSのVite警告を抑制するための設定
  vite: {
    build: {
      sourcemap: true, 
    },
    // ⬇️ 警告を抑制するための設定を追記
    logLevel: 'silent',
    // 'silent' にすると、Tailwindからのソースマップ警告が出力されなくなります。
    // 必要に応じて warning を指定することも可能ですが、警告を完全に消したい場合は silent が最適です。
  },
  
  // ✅ 外部CSSを読み込む設定 (Font Awesome)
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
