<template>
  <div class="flex gap-2">
    <TextInput label="Main Social" v-model="data.mainSocial" class="inline-block" />
    <TextInput label="Secondary Social" v-model="data.secondarySocial" class="inline-block" />
  </div>
  <div class="mt-4">
    <input v-model="data.showOverlay" type="checkbox" class="mr-2" />show overlay
  </div>
</template>

<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
defineProps(['data'])
</script>
