<template>
  <div class="flex flex-col gap-0.5 rounded-md">
    <div v-if="value.length === 0">NO MESSAGES</div>
    <div
      v-for="(message, index) in value"
      :key="message.id"
      class="flex justify-between p-1 hover:bg-slate-100"
    >
      <div>
        <span class="font-bold" :style="`color:${message.color}`">{{ message.sender }}:</span>
        {{ message.content }}
      </div>
      <div class="flex">
        <slot name="buttons" v-bind="{ message, index }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Message } from './types'

const props = defineProps<{
  modelValue: Array<Message>
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue || []
  },
  set(value: Array<Message>) {
    emit('update:modelValue', value)
  },
})
</script>
