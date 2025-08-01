<script lang="ts" setup>
import { ref } from 'vue';
import ChatBubble from './chat-bubble.vue';
import MessageInput from './message-input.vue';
import type { Message } from '../../../types/message';
import { useChatbotStore } from '../../../store/chatbotStore';

const props = defineProps<{
  messages: Message[];
}>();
const store = useChatbotStore()

function handleSend(text: string) {
 store.sendMessage({
    id: store.messages.length + 1,
    text,
    isUser: true,
    timestamp: new Date()
 })
}
console.log(props)

</script>
<template>
  <div class="flex">
    <div class="flex-1">
      <div class="h-full rounded-md space-y-2 ">
        <div class=" w-full overflow-y-auto py-4 px-8 bg-white rounded border border-gray-200 min-h-[80vh] max-h-[80vh]">
          <ChatBubble v-for=" msg in props.messages" :key="msg.id" :message="msg"/>
        </div>
      </div>
      <MessageInput @send="handleSend" />
    </div>
    <div class="flex-1 hidden lg:flex justify-center w-full">
      <img src="/chatbot.png" width="500"
    </div>
  </div>
</template>
