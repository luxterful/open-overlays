<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
    <div
      class="border rounded-md h-20 overflow-hidden"
      :style="mod.dimensions && styleCalculator(mod.dimensions)"
      v-for="mod in modules"
      :key="mod.id"
    >
      <component :is="moduleMap[mod.type]" :label="mod.displayText" v-model="data[mod.id]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import config from './config.json'
import TextInput from '@/components/input-modules/TextInputModule.vue'
import NumberInput from '@/components/input-modules/NumberInputModule.vue'
import BoolInput from '@/components/input-modules/BoolInputModule.vue'

const moduleMap = { text: TextInput, number: NumberInput, bool: BoolInput } as any
const modulesRaw = config.modules

const modules = Object.keys(modulesRaw).map((key) => {
  return { ...(modulesRaw as any)[key], id: key }
})

function styleCalculator({ rows, cols }: { rows: number; cols: number }) {
  const height = `${5 * rows + rows - 1}rem`
  const gridRow = `span ${rows} / span ${rows}`
  const gridCol = `span ${cols} / span ${cols}`
  return {
    'grid-row': rows ? gridRow : undefined,
    'grid-column': cols ? gridCol : undefined,
    height
  }
}

defineProps(['data'])
</script>
