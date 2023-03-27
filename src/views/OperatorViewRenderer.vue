<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
    <div
      class="border rounded-md overflow-hidden"
      :style="mod.dimensions && styleCalculator(mod.dimensions)"
      v-for="mod in modules"
      :key="mod.id"
    >
      <component
        :is="allModules[mod.type].component"
        :label="mod.displayText"
        v-model="data[mod.id]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { parseConfig } from '@/utils/configLoader'
import modulesMap from '@/components/input-modules'
import customModulesMap from '@/project/custom-modules'
import { computed } from 'vue'
import type { InputModuleDefinition } from '@/types/InputModules'

const allModules: InputModuleDefinition = { ...modulesMap, ...customModulesMap }

const props = defineProps(['data', 'config'])

console.log(props.config)

const con = parseConfig({ modules: props.config })
console.log(con)

const modules = computed(() =>
  Object.keys(props.config).map((key) => {
    return { ...(props.config as any)[key], id: key }
  })
)

function styleCalculator({ rows, cols }: { rows: number; cols: number }) {
  const height = `${5 * rows + rows - 1}rem`
  const gridRow = `span ${rows} / span ${rows}`
  const gridCol = `span ${cols} / span ${cols}`
  return {
    'grid-row': rows ? gridRow : undefined,
    'grid-column': cols ? gridCol : undefined,
    height,
  }
}
</script>
