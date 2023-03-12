<template>
  <div>
    <Transition>
      <div class="absolute" :class="itemClass" v-if="isFirst">{{ value1 }}</div>
      <div class="absolute" :class="itemClass" v-else>{{ value2 }}</div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
const props = defineProps<{
  value: any
  itemClass?: string
}>()

const isFirst = ref(true)

const value1 = ref<any | null>(props.value)
const value2 = ref<any | null>(null)

const counter = computed(() => props.value)

watch(counter, () => {
  if (isFirst.value) {
    value2.value = props.value
  } else {
    value1.value = props.value
  }

  isFirst.value = !isFirst.value
})
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

.v-enter-from {
  transform: translateY(50px);
  opacity: 0;
}
</style>
