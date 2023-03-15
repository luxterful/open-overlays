<template>
  <div class="h-full w-full flex">
    <TwitchChat class="flex-1 bg-purple-300 p-2 max-h-96 overflow-y-auto">
      <template #buttons="message">
        <div
          class="bg-gray-300 p-2 rounded-md cursor-pointer hover:bg-gray-400"
          @click="addMessageToBacklog(message)"
        >
          <ChevronDoubleRightIcon class="w-3 h-3" />
        </div>
      </template>
    </TwitchChat>
    <div class="flex-1 flex flex-col gap-1 p-2">
      <span class="font-bold text-lg mb-2">Message Backlog</span>

      <div v-for="message in messageBacklog" :key="message.id" class="flex justify-between">
        <div>
          <span class="font-bold">{{ message.sender }}:</span> {{ message.content }}
        </div>
        <div>
          <div
            class="bg-gray-300 p-2 rounded-md cursor-pointer hover:bg-gray-400"
            @click="data.selectedMessage = message"
          >
            use
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <TextInput label="User" v-model="sender" />
    <TextInput :multiline="true" label="Message" v-model="content" />
    <input v-model="data.showOverlay" type="checkbox" class="mr-2" />show overlay
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TwitchChat from '../../components/TwitchChat.vue'
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/solid'
import TextInput from '@/components/TextInput.vue'

const props = defineProps(['data'])

const sender = computed({
  get() {
    return props.data?.selectedMessage?.sender || ''
  },
  set(newValue) {
    if (props.data?.selectedMessage) props.data.selectedMessage.sender = newValue
    props.data.selectedMessage = { sender: newValue }
  }
})

const content = computed({
  get() {
    return props.data?.selectedMessage?.content || ''
  },
  set(newValue) {
    if (props.data?.selectedMessage) props.data.selectedMessage.content = newValue
    props.data.selectedMessage = { content: newValue }
  }
})

const messageBacklog = ref<any>([])

function addMessageToBacklog(message: any) {
  messageBacklog.value.push(message)
}
</script>
