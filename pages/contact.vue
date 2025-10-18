<template>
    <div>
      <div class="contact-page-content">
        <h1>お問い合わせ</h1>
        <p>
          制作のご依頼、技術的な質問、またはその他のお問い合わせは、以下のボタンからフォームを開いてご連絡ください。
        </p>
        <p>
          迅速な対応を心がけておりますが、内容によっては数日お時間をいただく場合がございます。あらかじめご了承ください。
        </p>
  
        <div class="open-form-area">
          <button class="open-form-btn" @click="isFormVisible = true">
            フォームを開く
          </button>
        </div>
      </div>
      
      <MailForm v-if="isFormVisible" @close="isFormVisible = false" />
    </div>
  </template>
  
  <script setup lang="ts">
import { ref } from 'vue';
// ----------------------------------------------------
// Nuxtのエイリアス (~) を使ってcomponentsフォルダのMailFormをインポート
import MailForm from '~/components/MailForm.vue'; 
// ----------------------------------------------------
const isFormVisible = ref(false); 
// ...
  </script>
  
  <style scoped>
  .contact-page-content {
    max-width: 700px;
    margin: 40px auto;
    padding: 0 20px;
    text-align: center;
  }
  
  .contact-page-content h1 {
    font-size: 2.5em;
    color: #333;
    margin-bottom: 20px;
    border-bottom: 3px solid #0370e5;
    display: inline-block;
    padding-bottom: 5px;
  }
  
  .contact-page-content p {
    line-height: 1.8;
    color: #555;
    margin-bottom: 20px;
    text-align: left;
  }
  
  .open-form-area {
    margin-top: 40px;
  }
  
  .open-form-btn {
    background-image: linear-gradient(to right, #0370e5 0%, #0370e5 100%);
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .open-form-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  
  </style>