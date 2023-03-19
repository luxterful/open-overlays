<template>
  <div class="w-full h-full">
    <div class="flex flex-col h-full">
      <div class="h-10 flex items-center justify-center">
        <div class="text-md">
          {{ label }}
        </div>
      </div>
      <div class="flex-1 p-1">
        <input
          v-model="value"
          class="block border p-1 border-slate-400 bg-slate-200 rounded-md w-full h-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: string
  label: string
  multiline?: Boolean
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue || ''
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})
</script>
