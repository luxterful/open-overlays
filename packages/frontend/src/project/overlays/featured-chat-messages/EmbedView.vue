<template>
  <Transition name="message">
    <div
      v-if="data.showOverlay && data.twitchChat.featuredMessage"
      class="relative bg-white border border-green-300 rounded-md m-10 -skew-x-12"
    >
      <div class="absolute -mt-5 -ml-5 bg-green-600 p-2 rounded md text-white">
        <span class="font-bold">{{ data.twitchChat.featuredMessage.sender }}</span> fragt:
      </div>
      <div class="pt-7 px-4 pb-4">
        {{ data.twitchChat.featuredMessage.content }}
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['data'])

const showCurrent = ref(props.data.mainSocial)
const showMain = ref(true)

setInterval(() => {
  if (showMain.value) {
    showCurrent.value = props.data.secondarySocial
  } else {
    showCurrent.value = props.data.mainSocial
  }

  showMain.value = !showMain.value
}, 5000)
</script>

<style scoped>
.message-enter-active,
.message-leave-active {
  transition: all 0.5s ease;
}

.message-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.message-enter-from {
  transform: translateY(10px);
  opacity: 0;
}
</style>
