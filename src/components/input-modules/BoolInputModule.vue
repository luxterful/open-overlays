<template>
  <div
    class="w-full h-full cursor-pointer"
    :class="[value ? 'bg-emerald-500' : 'bg-rose-500']"
    @click="() => (value = !value)"
  >
    <div class="flex flex-col h-full">
      <div class="flex-1 flex items-center justify-center">
        <div class="text-md text-white">
          {{ label }}
        </div>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <div
          class="relative inline-block w-10 h-6 mr-2 align-middle select-none transition duration-200 ease-in rounded-full overflow-hidden"
        >
          <div class="w-full h-full bg-gray-300 opacity-50"></div>
          <div
            class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white appearance-none cursor-pointer top-0"
            :class="{ 'right-0': value }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: boolean
  label: string
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue || false
  },
  set(value: boolean) {
    emit('update:modelValue', value)
  }
})
</script>
