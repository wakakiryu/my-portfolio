<template>
    <div class="mail-modal-overlay">
      
      <div class="mail-form-container">
        
        <div class="form-header">
          <h2>お問い合わせフォーム</h2>
          <button class="close-btn" @click="$emit('close')">×</button> 
        </div>
        
        <form class="mail-form" @submit.prevent="submitForm">
          
          <MailInput
            id="name"
            label="お名前"
            type="text"
            placeholder="山田 太郎"
            required
            v-model="formData.name"
          />
  
          <MailInput
            id="email"
            label="メールアドレス"
            type="email"
            placeholder="example@mail.com"
            required
            v-model="formData.email"
          />
  
          <MailInput
            id="message"
            label="お問い合わせ内容"
            type="textarea"
            placeholder="ご質問やご依頼内容をご記入ください"
            required
            :rows="5"
            v-model="formData.message"
          />
          
          <button type="submit" class="submit-btn">
            送信する
          </button>
        </form>
        
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
// components/MailForm.vue の <script setup>

import { reactive } from 'vue';
// ----------------------------------------------------
// ✅ 修正：相対パスを明示的に指定
import MailInput from './mail/MailInput.vue'; 
// ----------------------------------------------------

// ... (続くコード)
  
  // 親コンポーネントに'close'イベントを通知
  const emit = defineEmits(['close']);
  
  // フォームのデータ管理
  const formData = reactive({
    name: '',
    email: '',
    message: ''
  });
  
  // フォーム送信処理（この中でお問い合わせ処理を記述します）
  const submitForm = () => {
    console.log('フォームデータ:', formData);
    alert('お問い合わせを送信しました！(実際にはバックエンド処理が必要です)');
    
    // フォームを閉じる
    emit('close');
  };
  </script>
  
  <style scoped>
  /* ================================== */
  /* 1. モーダルオーバーレイ（画面全体を覆い、背景を暗くする） */
  /* ================================== */
  .mail-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2000;
    
    /* Flexboxで中のフォームを中央に配置 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* ================================== */
  /* 2. フォーム本体のコンテナ（中央に表示されるカード） */
  /* ================================== */
  .mail-form-container {
    background-color: white;
    padding: 25px;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    
    /* フォームが画面より大きくなった場合にスクロールできるようにする */
    max-height: 90vh;
    overflow-y: auto;
  }
  
  /* ================================== */
  /* 3. ヘッダーと閉じるボタン */
  /* ================================== */
  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  
  .form-header h2 {
    font-size: 1.5em;
    margin: 0;
    color: #333;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 2em;
    cursor: pointer;
    color: #666;
    padding: 0;
  }
  
  /* ================================== */
  /* 4. 送信ボタン */
  /* ================================== */
  .submit-btn {
    display: block;
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    background-image: linear-gradient(to right, #ff7e5f 0%, #feb47b 100%);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .submit-btn:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  </style>