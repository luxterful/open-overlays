<template>
  <div class="flex flex-col gap-1">
    <div v-for="message in messages" :key="message.id" class="flex justify-between">
      <div>
        <span class="font-bold">{{ message.sender }}:</span> {{ message.content }}
      </div>
      <div><slot name="buttons" v-bind="message" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import tmi from 'tmi.js'
import parser from 'tmi.js/lib/parser'
import { ref } from 'vue'

const messages = ref<any>([])

const recentMessages = 'https://recent-messages.robotty.de/api/v2/recent-messages/syndsk'

const client = new tmi.client({
  channels: ['syndsk']
})

client.on('message', (target, context, msg, self) => {
  messages.value.push({ id: context.id, sender: context['display-name'], content: msg })
})

client.on('connected', (addr, port) => {
  console.log(client)
  console.log(`* Connected to ${addr}:${port}`)

  fetch(recentMessages)
    .then((response) => response.json())
    .then((data) => {
      for (const message of data.messages) {
        ;(client as any).handleMessage(parser.msg(message))
      }
    })
})
client.connect()
</script>
