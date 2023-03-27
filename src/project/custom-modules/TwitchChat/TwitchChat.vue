<template>
  <ModuleWrapper>
    <template #label>Syndsk Twitch Chat</template>
    <template #content>
      <div class="flex gap-1 overflow-hidden h-full">
        <ChatMessageList class="w-2/4 max-h-full overflow-y-scroll" :model-value="messages">
          <template #buttons="{ message }">
            <div class="cursor-pointer" @click="addMessageToBacklog(message)">
              <PlusCircleIcon class="w-6 h-6" />
            </div>
          </template>
        </ChatMessageList>
        <div class="flex-shrink w-2/4 h-full">
          <div class="flex flex-col h-full overflow-hidden gap-1">
            <div class="flex flex-col w-full gap-0.5">
              <div class="flex gap-1 items-center">
                Sender<input
                  v-model="featuredMessage.sender"
                  class="flex-1 bg-slate-100 border rounded-md"
                />
              </div>
              <div class="flex gap-1 items-center">
                Message<textarea
                  v-model="featuredMessage.content"
                  class="flex-1 bg-slate-100 resize-none border rounded-md"
                />
              </div>
            </div>
            <div class="flex-1 overflow-y-scroll">
              <ChatMessageList class="flex-none h-full" :model-value="value.backlog">
                <template #buttons="{ message, index }">
                  <div class="cursor-pointer" @click="setMessageAsFeatured(message)">
                    <EyeIcon class="w-6 h-6" />
                  </div>
                  <div class="cursor-pointer" @click="deleteMessageFromBacklog(index)">
                    <TrashIcon class="w-6 h-6" />
                  </div>
                </template>
              </ChatMessageList>
            </div>
          </div>
        </div>
      </div>
    </template>
  </ModuleWrapper>
</template>

<script setup lang="ts">
import ModuleWrapper from '@/components/input-modules/ModuleWrapper.vue'
import tmi from 'tmi.js'
import parser from 'tmi.js/lib/parser'
import { computed, ref } from 'vue'
import ChatMessageList from './ChatMessageList.vue'
import type { ComponentData, Message } from './types'
import { PlusCircleIcon, EyeIcon, TrashIcon } from '@heroicons/vue/24/solid'

const props = defineProps<{
  modelValue?: ComponentData
  label: string
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return (
      props.modelValue || {
        featuredMessage: null,
        backlog: [],
      }
    )
  },
  set(value: ComponentData) {
    emit('update:modelValue', value)
  },
})

const featuredMessage = computed({
  get() {
    return value.value.featuredMessage || { sender: '', content: '', id: '', color: 'black' }
  },
  set(value: Message) {
    setMessageAsFeatured(value)
  },
})

function addMessageToBacklog(message: any) {
  console.log('add', message)
  value.value = { ...value.value, backlog: [...value.value.backlog, message] }
}

function deleteMessageFromBacklog(index: number) {
  console.log('remove index from backlog', index)
  const backlogCopy = Array.from(value.value.backlog)
  backlogCopy.splice(index, 1)
  value.value = { ...value.value, backlog: backlogCopy }
}

function setMessageAsFeatured(message: any) {
  console.log('set featured', message)
  value.value = { ...value.value, featuredMessage: message }
}

const messages = ref<any>([])

const recentMessages = 'https://recent-messages.robotty.de/api/v2/recent-messages/syndsk'

const client = new tmi.client({
  channels: ['syndsk'],
})

client.on('message', (target, context, msg, self) => {
  console.log(context)
  messages.value.push({
    id: context.id,
    sender: context['display-name'],
    content: msg,
    color: context.color,
  })
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
