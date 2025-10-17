<template>
  <div class="site-container">
    <main class="main-content">
      <slot />
      </main>
    <TheFooter /> 
  </div>
</template>

<style>
/* ⚠️ 注意: ここは 'scoped' を外すか、共通CSSファイルに記述してください。
          layout ファイルで scoped を付けると、中の slot や main タグにスタイルが適用されない場合があります。*/

/* 1. ページ全体をビューポートの高さに合わせる */
.site-container {
  display: flex;
  flex-direction: column;
  /* ページ全体の最小高さをビューポートの100%に設定（重要！）*/
  min-height: 100vh; 
}

/* 2. メインコンテンツエリアの調整 */
.main-content {
  /* main が残りの領域を全て占めるようにし、flex レイアウトの基盤とする */
  flex: 1; 
}

/* 3. 固定フッターにコンテンツが隠れないようにする調整 */
/* footer.vue で設定したナビゲーションバーの高さ分を下部に余白として確保 */
.main-content { 
  /* #nav の高さ（約40px）より余裕を持たせた値を設定 */
  padding-bottom: 60px; 
}
</style>
