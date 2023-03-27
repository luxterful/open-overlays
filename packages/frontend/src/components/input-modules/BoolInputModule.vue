<template>
  <ModuleWrapper
    :class="[value ? 'bg-emerald-500' : 'bg-rose-500', 'cursor-pointer']"
    @click="() => (value = !value)"
  >
    <template #label>
      <span class="text-white">{{ label }}</span>
    </template>
    <template #content>
      <div class="flex items-center justify-center">
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
    </template>
  </ModuleWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ModuleWrapper from './ModuleWrapper.vue'

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
  },
})
</script>
