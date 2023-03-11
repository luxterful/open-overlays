<script setup lang="ts">
import api from '@/api'
import overlays from '@/overlays'
import { socket } from '@/socket'
import { computed, onBeforeMount, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const overlayId = computed(() => route.params.id as string)

const overlayData = reactive({ labelLeft: 'left test' })

async function fetchData() {
  const data = await api.getOverlayById(overlayId.value)
  console.log(data)
  Object.assign(overlayData, data)
}

onBeforeMount(async () => {
  fetchData()
})

onMounted(() => {
  socket.emit('joinRoom', overlayId.value)
})

socket.on('updateData', (data) => {
  Object.assign(overlayData, data)
  console.log(data)
})
</script>

<template>
  <component :is="overlays[overlayId].embedCompontent" :data="overlayData" />
</template>
