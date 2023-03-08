<template>
  <div class="overflow-hidden">
    <Transition>
      <div class="flex custom-perspective" v-if="showOverlayRef">
        <div
          class="bg-green-600 border-green-700 drop-shadow-md rounded-l-xl border-l-2 border-t-2 border-b-2 p-4 w-72 text-white flex items-center justify-center text-2xl flex-1"
        >
          {{ labelLeftRef }}
        </div>
        <div class="bg-red-200 w-16 text-4xl relative">
          <div
            class="absolute rounded-md bg-white drop-shadow-lg w-full h-full scale-125 flex items-center justify-center"
          >
            {{ counterLeftRef }}
          </div>
        </div>
        <div class="w-10"></div>
        <div class="bg-red-200 w-16 text-4xl relative z-10">
          <div
            class="absolute rounded-md bg-white drop-shadow-lg w-full h-full scale-125 flex items-center justify-center"
          >
            {{ countRightRef }}
          </div>
        </div>
        <div
          class="bg-green-600 border-green-700 drop-shadow-md z-0 rounded-r-xl border-r-2 border-t-2 border-b-2 p-4 w-72 text-white flex items-center justify-center text-2xl flex-1"
        >
          {{ labelRightRef }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { socket } from '@/socket'
import { ref } from 'vue'

const showOverlayRef = ref(false)

const counterLeftRef = ref(0)
const countRightRef = ref(0)

const labelLeftRef = ref('Team 1')
const labelRightRef = ref('Team 2')

socket.on(
  'ev_update_counters',
  ({ counterLeft, counterRight, labelLeft, labelRight, showOverlay }: any) => {
    counterLeftRef.value = counterLeft
    countRightRef.value = counterRight
    labelLeftRef.value = labelLeft
    labelRightRef.value = labelRight
    showOverlayRef.value = showOverlay
  }
)
</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
