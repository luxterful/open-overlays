<template>
  <div class="bg-gray-200 opacity-50 px-2 py-1 inline-block rounded-md">
    <div class="flex gap-1 items-center justify-center text-xs">
      <div class="w-2 h-2 rounded-full" :class="[connected ? 'bg-green-600' : 'bg-red-600']"></div>
      {{ connected ? 'CONNECTED' : 'DISCONNECTED' }}
    </div>
  </div>
</template>

<script>
import { state } from '@/socket'

export default {
  name: 'ConnectionState',

  computed: {
    connected() {
      return state.connected
    }
  }
}
</script>
