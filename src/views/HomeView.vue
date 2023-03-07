<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const countStore = useCounterStore()
</script>

<template>
  <div>
    <main>Welcome home son</main>
    <button class="bg-gray-300 rounded-md p-2" @click="countStore.increment">
      Counter: {{ countStore.count }}
    </button>
    <div>Double Count: {{ countStore.doubleCount }}</div>
  </div>
</template>
