import { reactive } from 'vue'
import { io } from 'socket.io-client'

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: []
})

const URL = 'http://localhost:3000/'

export const socket = io(URL)

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

socket.io.on('reconnection_attempt', () => {
  console.log('SOCKET: reconnection_attempt')
})

socket.io.on('reconnect', () => {
  console.log('SOCKET: reconnect')
})
