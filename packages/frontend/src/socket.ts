import { reactive } from 'vue'
import { io } from 'socket.io-client'

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
})

// default url is window.location.host
export const socket = io()

socket.on('connect', () => {
  state.connected = true
  console.log('SOCKET: connect')
})

socket.on('disconnect', () => {
  state.connected = false
  console.log('SOCKET: disconnect')
})

socket.on('connect_error', () => {
  console.log('SOCKET: connection_error')
})

socket.io.on('reconnect', () => {
  console.log('SOCKET: reconnect')
})
