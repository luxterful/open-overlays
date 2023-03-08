<template>
  <div>
    <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">
      {{ props.label }}
    </label>
    <div class="flex">
      <button
        class="bg-gray-200 aspect-square w-10 flex items-center justify-center font-mono cursor-pointer"
        @click="decrease"
      >
        -
      </button>
      <div class="bg-gray-200 aspect-square w-10 flex items-center justify-center font-mono">
        {{ props.modelValue }}
      </div>
      <button
        class="bg-gray-200 aspect-square w-10 flex items-center justify-center font-mono cursor-pointer"
        @click="increase"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: number
  label: string
}>()

const emit = defineEmits(['update:modelValue'])

function increase() {
  emit('update:modelValue', props.modelValue + 1)
}

function decrease() {
  if (props.modelValue > 0) {
    emit('update:modelValue', props.modelValue - 1)
  }
}
</script>
