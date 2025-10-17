<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    
    <template v-if="type === 'textarea'">
      <textarea
        :id="id"
        :rows="rows"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="handleInput"
      ></textarea>
    </template>
    <template v-else>
      <input
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="handleInput"
      >
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue';

// --- Props定義 ---
interface Props {
  id: string; 
  label: string;
  type?: 'text' | 'email' | 'textarea'; 
  placeholder?: string;
  required?: boolean;
  rows?: number; 
  modelValue: string; 
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
  rows: 5,
});

// --- Emits定義 ---
const emit = defineEmits(['update:modelValue']);

// --- イベントハンドラー関数 ---
// TypeScriptエラーを解消し、値を安全に取得します
const handleInput = (event: Event) => {
  // イベントターゲットをHTML入力要素として型アサーション
  const target = event.target as HTMLInputElement | HTMLTextAreaElement | null;
  
  // ターゲットが存在し、値を持っている場合のみ更新を通知
  if (target?.value !== undefined) {
    emit('update:modelValue', target.value);
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 16px;
}

textarea {
  resize: vertical;
}
</style>