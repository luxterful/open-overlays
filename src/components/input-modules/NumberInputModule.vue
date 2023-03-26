<template>
  <ModuleWrapper>
    <template #label>{{ label }}</template>
    <template #content>
      <div class="flex h-full rounded-md overflow-hidden border border-slate-400 bg-slate-200">
        <button
          class="flex-1 bg-slate-300 rounded-md flex items-center justify-center font-mono cursor-pointer m-0.5"
          @click="decrease"
        >
          -
        </button>
        <div class="flex-1 flex items-center justify-center font-mono">
          {{ props.modelValue ?? 0 }}
        </div>
        <button
          class="flex-1 bg-slate-300 rounded-md flex items-center justify-center font-mono cursor-pointer m-0.5"
          @click="increase"
        >
          +
        </button>
      </div>
    </template>
  </ModuleWrapper>
</template>

<script setup lang="ts">
import ModuleWrapper from './ModuleWrapper.vue'

const props = defineProps<{
  modelValue?: number
  label: string
}>()

const emit = defineEmits(['update:modelValue'])

function increase() {
  emit('update:modelValue', (props.modelValue ?? 0) + 1)
}

function decrease() {
  if (props.modelValue && props.modelValue > 0) {
    emit('update:modelValue', props.modelValue - 1)
  }
}
</script>
