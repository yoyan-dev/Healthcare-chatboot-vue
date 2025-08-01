<script lang="ts" setup>
import ChatWindow from './_components/chat-window.vue';
import { useChatbotStore } from '../../store/chatbotStore';
import { onMounted } from 'vue';

    const store = useChatbotStore();
    
    onMounted(() => {
        store.getMessages()
    })
</script>
<template>
    <div>
        <ChatWindow :messages="store.messages"/>
    </div>
</template>
