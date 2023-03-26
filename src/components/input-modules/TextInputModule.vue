<template>
  <ModuleWrapper>
    <template #label>{{ label }}</template>
    <template #content>
      <input
        v-model="value"
        class="block border p-1 border-slate-400 bg-slate-200 rounded-md w-full h-full"
      />
    </template>
  </ModuleWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ModuleWrapper from './ModuleWrapper.vue'

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
  },
})
</script>
