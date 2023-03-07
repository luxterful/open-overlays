<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-blue-400">
    <nav class="flex gap-4 px-4 py-2">
      <RouterLink class="text-white" to="/">Home</RouterLink>
      <RouterLink class="text-white" to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView class="p-4" />
</template>
