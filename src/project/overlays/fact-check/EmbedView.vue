<template>
  <Transition>
    <div
      v-if="data.showOverlay"
      class="relative bg-white border border-green-300 rounded-md m-10 -skew-x-12"
    >
      <div class="absolute -mt-5 -ml-5 bg-green-600 p-2 rounded md text-white">FACT CHECK</div>
      <div class="pt-7 px-4 pb-4">
        {{ data.factText }}
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import sound from '@/assets/swoosh.mp3'
import { useSound } from '@vueuse/sound'
import { watch } from 'vue'

const { play } = useSound(sound)

const props = defineProps(['data'])

watch(
  () => props.data.showOverlay,
  (valueNew: boolean) => {
    if (valueNew) play()
  }
)
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.v-enter-from {
  transform: translateX(50px);
  opacity: 0;
}
</style>
