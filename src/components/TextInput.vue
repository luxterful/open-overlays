<template>
  <div>
    <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">
      {{ props.label }}
    </label>
    <textarea
      v-if="multiline"
      v-model="value"
      class="block border p-1 border-slate-400 bg-slate-200 rounded-md"
    />

    <input
      v-else
      v-model="value"
      class="block border p-1 border-slate-400 bg-slate-200 rounded-md"
    />
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
