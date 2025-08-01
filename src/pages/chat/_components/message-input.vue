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
    <input v-model="text" type="text" class="w-full border text-sm rounded-md block  p-2.5  bg-gray-100 border-gray-700 placeholder-gray-400 " placeholder="Type your message..."/>
    <button type="submit" class="rounded text-white p-2.5 ms-2 text-sm font-medium text-whiterounded  focus:ring-4 focus:outline-none  bg-red-700 hover:bg-red-600">
        Send
    </button>
  </form>
</template>
