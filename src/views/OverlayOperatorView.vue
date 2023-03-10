<script setup lang="ts">
import overlays from '@/overlays'
import { socket } from '@/socket'
import { ArrowDownOnSquareStackIcon, ClipboardDocumentIcon } from '@heroicons/vue/24/solid'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const overlayId = computed(() => route.params.id as string)

const overlayData = reactive({ labelLeft: 'left test' })

const autoUpdate = ref(false)

onMounted(() => {
  socket.emit('joinRoom', overlayId.value)
})

watch(overlayId, (to: string, from: string) => {
  socket.emit('switchRoom', { fromRoom: from, toRoom: to })
})

watch(overlayData, () => {
  if (autoUpdate.value) socket.emit('updateData', { overlayId: overlayId.value, data: overlayData })
})

function updateOverlay() {
  socket.emit('updateData', { overlayId: overlayId.value, data: overlayData })
}
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="bg-slate-600 w-full h-11 text-white flex justify-between">
      <div class="flex gap-5">
        <div
          class="flex gap-2 items-center hover:bg-slate-500 p-2 cursor-pointer"
          @click="updateOverlay"
        >
          <ArrowDownOnSquareStackIcon class="h-5 w-5" />Update Overlay
        </div>
        <div
          class="flex gap-2 items-center hover:bg-slate-500 p-2 cursor-pointer"
          @click="autoUpdate = !autoUpdate"
        >
          auto update [{{ autoUpdate ? 'on' : 'off' }}]
        </div>
      </div>

      <div class="flex gap-2 items-center hover:bg-slate-500 p-2 cursor-pointer">
        <ClipboardDocumentIcon class="h-5 w-5" />Copy overlay url
      </div>
    </div>
    <div class="p-3">
      <component
        :is="overlays[overlayId].operatorCompontent"
        :data="overlayData"
        :changeOverlayData="(data: any) => (overlayData = data)"
      />
    </div>
  </div>
</template>
