<template>
  <div>
    <TextInput :multiline="true" label="Fact" v-model="data.fact" class="inline-block" />
  </div>
  <div class="mt-4">
    <input v-model="data.showOverlay" type="checkbox" class="mr-2" />show overlay
  </div>
</template>

<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
defineProps(['data'])
</script>
