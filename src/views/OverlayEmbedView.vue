<script setup lang="ts">
import overlays from '@/overlays'
import { socket } from '@/socket'
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const overlayId = computed(() => route.params.id as string)

const overlayData = reactive({ labelLeft: 'left test' })

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
