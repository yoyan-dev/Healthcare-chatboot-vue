<script lang="ts" setup>
import navBar from '../components/nav-bar.vue';
</script>
<template>
  <div class="bg-gray-50 fixed w-full">
    <div class="min-h-screen flex flex-col">
      <navBar />
      <main class="flex-1 p-4 ">
        <slot />
      </main>
    </div>
  </div>
</template>
