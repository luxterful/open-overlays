<template>
  <div class="h-full flex">
    <TwitchChat class="bg-purple-300 p-2 max-h-96 overflow-y-auto">
      <template #buttons="message">
        <div
          class="bg-gray-300 p-2 rounded-md cursor-pointer hover:bg-gray-400"
          @click="addMessageToBacklog(message)"
        >
          <ChevronDoubleRightIcon class="w-3 h-3" />
        </div>
      </template>
    </TwitchChat>
    <div class="flex flex-col gap-1 p-2">
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
    <TextInput label="User" v-model="data.selectedMessage.sender" />
    <TextInput label="Message" v-model="data.selectedMessage.content" />
    <input v-model="data.showOverlay" type="checkbox" class="mr-2" />show overlay
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TwitchChat from '../../components/TwitchChat.vue'
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/solid'
import TextInput from '@/components/TextInput.vue'

defineProps(['data'])

const messageBacklog = ref<any>([])

function addMessageToBacklog(message: any) {
  messageBacklog.value.push(message)
}
</script>
