<script lang="ts" setup>
import MainLayout from './layouts/main-layout.vue';
</script>
<template>
    <MainLayout>
      <div class="flex flex-col justify-center ">
        <RouterView/>
      </div>
  </MainLayout>
</template>