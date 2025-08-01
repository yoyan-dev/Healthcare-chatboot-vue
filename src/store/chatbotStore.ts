import { defineStore } from 'pinia';
import type { Message } from '../types/message';
import { ref } from 'vue';
import { getBotResponse } from '../services/chatbot';

export const useChatbotStore = defineStore('chatbot',() =>  {
    const isLoading = ref(false);
    const messages = ref<Message[]>([]);

    async function getMessages() {
        isLoading.value = true;
        messages.value = [    
            { 
                id: 1,
                text: 'Hello! How can I help you today?', 
                isUser: false,
                timestamp: new Date(),
            }
        ]
    }

    async function sendMessage(payload: Message) {
        isLoading.value = true;
        try{
            messages.value.push({
                ...payload,
            })
            const response = await getBotResponse(payload.text)

            messages.value.push({
                id: messages.value.length + 1, 
                text: response,
                isUser: false,
                timestamp: new Date(),
            })
            console.log('Message sent:')
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            isLoading.value = true;
        }
    }

    return { 
        isLoading,
        messages,
        getMessages,
        sendMessage,
    }
});
