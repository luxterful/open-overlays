<script setup lang="ts">
import overlays from '@/project/overlays'
import { socket } from '@/socket'
import {
  ArrowDownOnSquareStackIcon,
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
  ClipboardDocumentIcon,
} from '@heroicons/vue/24/solid'
import { computed, onBeforeMount, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/api'
import OperatorViewRenderer from './OperatorViewRenderer.vue'

const route = useRoute()
const overlayId = computed(() => route.params.id as string)

const overlayData = reactive({})
const autoUpdate = ref(false)

const isLoading = ref(true)
const isPreviewShown = ref(false)

onMounted(() => {
  socket.emit('joinRoom', overlayId.value)
})

async function fetchData() {
  const data = await api.getOverlayById(overlayId.value)
  console.log('loaded', data)
  for (const key of Object.keys(overlayData)) {
    delete (overlayData as any)[key]
  }
  Object.assign(overlayData, data)
}

onBeforeMount(async () => {
  fetchData()
})

watch(overlayId, (to: string, from: string) => {
  socket.emit('switchRoom', { fromRoom: from, toRoom: to })
  fetchData()
})

watch(overlayData, () => {
  if (autoUpdate.value) socket.emit('updateData', { overlayId: overlayId.value, data: overlayData })
})

function updateOverlay() {
  socket.emit('updateData', { overlayId: overlayId.value, data: overlayData })
}

function copyOverlayUrl() {
  const baseUrl = window.location.origin
  const url = `${baseUrl}/embed/${overlayId.value}`
  navigator.clipboard.writeText(url)
}
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex-1 overflow-y-auto flex flex-col">
      <div class="bg-slate-600 w-full h-11 text-white flex justify-between">
        <div class="flex gap-5">
          <div
            class="flex gap-2 items-center hover:bg-slate-500 p-2 cursor-pointer flex-nowrap"
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
        <div class="p-2 flex justify-center">
          <div class="bg-slate-200 p-1 rounded-md text-slate-600">X overlays connected</div>
        </div>
        <div
          class="flex gap-2 items-center hover:bg-slate-500 p-2 cursor-pointer"
          @click="copyOverlayUrl"
        >
          <ClipboardDocumentIcon class="h-5 w-5" />Copy overlay url
        </div>
      </div>
      <div class="p-3 flex-1 overflow-auto">
        <OperatorViewRenderer
          :data="overlayData"
          :config="overlays[overlayId].operatorCompontent"
        />
      </div>
    </div>
    <div class="flex flex-col" :class="{ 'h-1/2': isPreviewShown }">
      <div
        class="w-full bg-slate-600 hover:bg-slate-500 text-white flex gap-3 items-center justify-center p-2 cursor-pointer"
        @click="isPreviewShown = !isPreviewShown"
      >
        <component
          :is="isPreviewShown ? ChevronDoubleDownIcon : ChevronDoubleUpIcon"
          class="h-5 w-5"
        />
        {{ isPreviewShown ? 'hide preview' : 'show preview' }}
        <component
          :is="isPreviewShown ? ChevronDoubleDownIcon : ChevronDoubleUpIcon"
          class="h-5 w-5"
        />
      </div>
      <div class="overflow-y-auto flex-1">
        <component
          v-if="isPreviewShown"
          :is="overlays[overlayId].embedCompontent"
          :data="overlayData"
        />
      </div>
    </div>
  </div>
</template>
