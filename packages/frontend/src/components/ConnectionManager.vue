<template>
  <button class="bg-gray-200 p-2 rounded-md" @click="connect()">Connect</button>
  <button class="bg-gray-200 p-2 rounded-md" @click="disconnect()">Disconnect</button>
</template>

<script>
import { socket } from '@/socket'

export default {
  name: 'ConnectionManager',

  methods: {
    connect() {
      socket.connect()
    },
    disconnect() {
      socket.disconnect()
    }
  }
}
</script>
