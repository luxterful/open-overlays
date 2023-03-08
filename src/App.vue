<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ConnectionState from '@/components/ConnectionState.vue'
</script>

<template>
  <header class="bg-blue-400">
    <nav class="flex justify-between px-4 py-2">
      <div class="flex gap-4">
        <RouterLink class="text-white" to="/">Home</RouterLink>
        <RouterLink class="text-white" to="/about">About</RouterLink>
      </div>
      <ConnectionState />
    </nav>
  </header>

  <RouterView class="p-4" />
</template>
