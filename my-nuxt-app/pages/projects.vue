<template>
  <div class="project-message">
    <h2>I haven’t done any projects yet...
    </h2>
  </div>
</template>

<style scoped>
/* コンポーネントのルート要素にクラスを付与し、中央寄せの基盤を作る */
.project-message {
/* ページの幅全体を使い、テキストコンテンツを中央に寄せる */
text-align: center; 
padding: 40px 20px; /* 上下の余白を確保 */
margin: 0 auto;
}

h2 {
font-size: 1.5em; /* フォントサイズを調整（好みで変更してください） */
color: #555; /* 文字色を少し暗くして目立たせる */
/* h2自体は text-align: center; で中央寄せされるため、
   特別な margin や display の調整は不要です。 */
margin-top: 20px;
}
</style>