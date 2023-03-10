<template>
  <div class="overflow-hidden pt-5">
    <Transition>
      <div v-if="data.showOverlay">
        <div class="flex custom-perspective">
          <div
            class="bg-green-600 border-green-700 drop-shadow-md rounded-l-xl border-l-2 border-t-2 border-b-2 p-4 w-72 text-white flex items-center justify-center text-2xl flex-1"
          >
            {{ data.labelLeft }}
          </div>
          <div class="bg-red-200 w-16 text-4xl relative">
            <div
              class="absolute rounded-md bg-white drop-shadow-lg w-full h-full scale-125 flex items-center justify-center"
            >
              {{ data.counterLeft }}
            </div>
          </div>
          <div class="w-10"></div>
          <div class="bg-red-200 w-16 text-4xl relative z-10">
            <div
              class="absolute rounded-md bg-white drop-shadow-lg w-full h-full scale-125 flex items-center justify-center"
            >
              {{ data.counterRight }}
            </div>
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
defineProps(['data'])
</script>
