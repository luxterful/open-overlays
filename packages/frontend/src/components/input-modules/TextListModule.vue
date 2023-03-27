<template>
  <ModuleWrapper>
    <template #label>{{ label }}</template>
    <template #content>
      <div class="flex flex-col gap-1 h-full">
        <div class="flex-1 bg-slate-200 p-1 rounded-md h-full">
          <div class="flex flex-col overflow-hidden">
            <div class="flex gap-1" v-for="(_, index) in list" :key="index">
              <input
                v-model="list[index]"
                class="block border p-1 border-slate-400 bg-slate-200 rounded-md w-full h-full"
              />
              <div
                class="px-2 rounded-md bg-green-200 cursor-pointer"
                @click="list.splice(index, 1)"
              >
                d
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-1">
          <input
            v-model="value"
            class="block border p-1 border-slate-400 bg-slate-200 rounded-md w-full h-full"
          />
          <div
            class="px-2 rounded-md bg-green-200 cursor-pointer"
            @click="
              () => {
                list.push(value)
                value = ''
              }
            "
          >
            +
          </div>
        </div>
      </div>
    </template>
  </ModuleWrapper>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import ModuleWrapper from './ModuleWrapper.vue'

const list = reactive<string[]>([])

const props = defineProps<{
  modelValue?: string
  label: string
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
