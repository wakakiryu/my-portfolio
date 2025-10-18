// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Tailwind CSSのVite警告を抑制するための設定
  vite: {
    build: {
      sourcemap: true, 
    },
    logLevel: 'silent',
  },
  
  // 外部CSSを読み込む設定 (Font Awesome)
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
        },
      ],
    },
  },

  modules: ['@nuxt/scripts', '@nuxt/ui'],

  // --- ↓ ここからがEmailJSのための追記部分です ---
  runtimeConfig: {
    public: {
      // .envファイルで設定した変数をここで読み込む
      // これで、コンポーネント内で useRuntimeConfig() を使って安全に呼び出せるようになります
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    }
  }
  // --- ↑ ここまでが追記部分です ---
})
