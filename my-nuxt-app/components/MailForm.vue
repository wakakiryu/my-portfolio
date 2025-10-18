<template>
  <div class="mail-modal-overlay">
    <div class="mail-form-container">
      <div class="form-header">
        <h2>お問い合わせフォーム</h2>
        <button class="close-btn" @click="$emit('close')">×</button>
      </div>

      <div v-if="isSuccess" class="success-message">
        <h3>✅ 送信完了</h3>
        <p>お問い合わせいただきありがとうございます。</p>
        <p>内容を確認の上、折り返しご連絡いたします。</p>
      </div>

      <form v-else class="mail-form" @submit.prevent="sendEmail">
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
        
        <button type="submit" class="submit-btn" :disabled="isLoading">
          {{ isLoading ? '送信中...' : '送信する' }}
        </button>

        <p v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import emailjs from '@emailjs/browser';
import MailInput from './mail/MailInput.vue';

const emit = defineEmits(['close']);
const config = useRuntimeConfig();

const formData = reactive({
  name: '',
  email: '',
  message: ''
});

const isLoading = ref(false);
const isSuccess = ref(false);
const errorMessage = ref('');

const sendEmail = async () => {
  isLoading.value = true;
  errorMessage.value = '';

  const templateParams = {
    from_name: formData.name,
    reply_to: formData.email,
    message: formData.message,
  };

  try {
    // ✅ 型アサーション (as string) を追加してエラーを解決
    await emailjs.send(
      config.public.emailjsServiceId as string,
      config.public.emailjsTemplateId as string,
      templateParams,
      config.public.emailjsPublicKey as string
    );

    isSuccess.value = true;
    
    setTimeout(() => {
      emit('close');
    }, 5000);

  } catch (error) {
    console.error('メール送信エラー:', error);
    errorMessage.value = '送信に失敗しました。時間をおいて再度お試しください。';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
/* スタイルは変更なし */
.mail-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mail-form-container {
  background-color: white;
  padding: 25px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  overflow-y: auto;
}

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

.submit-btn {
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-image: linear-gradient(to right, #0370e5 0%, #0370e5 100%);
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

.submit-btn:disabled {
  background-image: linear-gradient(to right, #aaa 0%, #ccc 100%);
  cursor: not-allowed;
  transform: none;
}

.success-message {
  text-align: center;
  padding: 20px;
}
.success-message h3 {
  color: #28a745;
  margin-bottom: 10px;
}

.error-message {
  color: #dc3545;
  text-align: center;
  margin-top: 15px;
}
</style>

