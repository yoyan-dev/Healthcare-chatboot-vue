<script lang="ts" setup>
import type { Message } from '../../../types/message';

defineProps<{ message: Message}>();
</script>

<template>
  <div class="flex gap-2.5" :class="{ 'justify-end': message.isUser, 'justify-start': !message.isUser }">
    <div class="flex flex-col gap-1  max-w-[320px] my-2">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span class="text-sm font-semibold text-white">{{ message.isUser? 'You' : 'Bot' }}</span>
          <span class="text-sm font-normal text-gray-400">11:46</span>
        </div>
        <div 
          class="flex flex-col leading-1.5 p-4 rounded-e-xl rounded-es-xl" 
          :class="{ 'bg-blue-900 text-white py-1 px-2': message.isUser, 'bg-gray-700 text-gray-100 py-1 px-2': !message.isUser }
        ">
          <p class="text-sm font-normal "> {{ message.text }}</p>
        </div>
    </div>
  </div>
</template>
