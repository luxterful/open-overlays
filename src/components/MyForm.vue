<template>
  <div>
    <div class="flex flex-wrap gap-5">
      <div class="flex flex-col gap-2">
        <TextInput label="Label left" v-model="labelLeft" class="inline-block" />
        <NumberInput label="Counter left" v-model="counterLeft" class="inline-block" />
      </div>
      <div class="flex flex-col gap-2">
        <TextInput label="Label right" v-model="labelRight" class="inline-block" />
        <NumberInput label="Counter right" v-model="counterRight" class="inline-block" />
      </div>
    </div>
    <div class="mt-4"><input v-model="showOverlay" type="checkbox" class="mr-2" />show overlay</div>
    <button class="bg-gray-200 p-2 rounded-md mt-5" @click="updateCounters">update overlay</button>
  </div>
</template>

<script setup lang="ts">
import { socket } from '@/socket'
import { ref } from 'vue'
import NumberInput from './NumberInput.vue'
import TextInput from './TextInput.vue'

const counterLeft = ref(0)
const counterRight = ref(0)

const labelLeft = ref('')
const labelRight = ref('')

const showOverlay = ref(false)

function updateCounters() {
  socket.emit('ev_update_counters', {
    labelLeft: labelLeft.value,
    labelRight: labelRight.value,
    counterLeft: counterLeft.value,
    counterRight: counterRight.value,
    showOverlay: showOverlay.value
  })
}
</script>
