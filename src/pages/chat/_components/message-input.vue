<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
const text = ref('')

const emit = defineEmits(['send']);
function onSend() {
  if (text.value.trim()) {
    emit('send', text.value);
    text.value = '';
  }
}

</script>
<template>
  <form @submit.prevent="onSend" class="flex items-center fixed lg:sticky left-0  bottom-0 w-full px-2 pb-2">   
    <input v-model="text" type="text" class="w-full border text-sm rounded-md block  p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Type your message..."/>
    <button type="submit" class="rounded text-white p-2.5 ms-2 text-sm font-medium text-whiterounded  focus:ring-4 focus:outline-none  bg-blue-900 hover:bg-blue-700 focus:ring-blue-800">
        Send
    </button>
  </form>
</template>
