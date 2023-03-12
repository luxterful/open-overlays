<template>
  <div class="pt-16 h-full">
    <Transition>
      <div v-if="data.showOverlay">
        <div class="flex custom-perspective">
          <div
            class="bg-green-600 border-green-700 drop-shadow-md rounded-l-xl border-l-2 border-t-2 border-b-2 p-4 w-72 text-white flex items-center justify-center text-2xl flex-1"
          >
            {{ data.labelLeft }}
          </div>
          <div class="w-16 text-4xl relative">
            <div
              class="absolute rounded-md bg-white drop-shadow-lg w-full h-full scale-125 overflow-hidden"
            >
              <CarouselComponent
                class="w-16 h-16"
                item-class="w-16 h-16 flex items-center justify-center"
                :value="data.counterLeft"
              />
            </div>
            <Transition name="crown">
              <img v-if="data.leftWon" :src="crown" class="absolute -mt-14 -ml-6 -rotate-12" />
            </Transition>
          </div>
          <div class="w-10"></div>
          <div class="w-16 text-4xl relative z-10">
            <div
              class="absolute rounded-md bg-white drop-shadow-lg w-full h-full scale-125 overflow-hidden"
            >
              <CarouselComponent
                class="w-16 h-16"
                item-class="w-16 h-16 flex items-center justify-center"
                :value="data.counterRight"
              />
            </div>
            <Transition name="crown">
              <img v-if="data.rightWon" :src="crown" class="absolute -mt-14 ml-6 rotate-12" />
            </Transition>
          </div>
          <div
            class="bg-green-600 border-green-700 drop-shadow-md z-0 rounded-r-xl border-r-2 border-t-2 border-b-2 p-4 w-72 text-white flex items-center justify-center text-2xl flex-1"
          >
            {{ data.labelRight }}
          </div>
        </div>
        <div class="flex items-center justify-center mt-5" v-if="data.currentGame">
          <span class="bg-white p-2 rounded-md"> {{ data.currentGame }} </span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import crown from '@/assets/crown.png'
import CarouselComponent from '@/components/CarouselComponent.vue'
import sound from '@/assets/sound.mp3'
import { useSound } from '@vueuse/sound'
import { watch } from 'vue'

const props = defineProps(['data'])

const { play } = useSound(sound)

watch(
  () => [props.data.counterRight, props.data.counterLeft],
  () => {
    play()
  }
)
</script>

<style>
.crown-enter-active {
  transition: all 0.5s ease;
}

.crown-enter-from {
  transform: translateY(-25px);
  opacity: 0;
}
</style>
