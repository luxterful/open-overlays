<template>
  <div class="flex gap-2 p-2 bg-gray-200 mb-20">
    <button class="bg-blue-200 p-2 rounded-md" @click="start">start</button>
    <button class="bg-blue-200 p-2 rounded-md" @click="reverse">reverse</button>
  </div>

  <div class="flex justify-center">
    <div class="dotted border border-gray-300 w-[1280px] h-[720px] overflow-hidden">
      <div id="container" class="inline-block mt-20">
        <div id="time" class="bg-blue-200 p-2 inline-block">time</div>
        <div class="flex">
          <div class="bg-red-200 z-10">
            <div class="p-1">player1:</div>
            <div class="p-1">player2:</div>
          </div>
          <div id="points" class="bg-orange-200">
            <div class="p-1">0</div>
            <div class="p-1">0</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

var tl = gsap.timeline()

const played = ref(false)

onMounted(() => {
  //tl.set('#test', { xPercent: -100 })
  tl.fromTo('#container', { xPercent: -100 }, { xPercent: 0 })
  tl.fromTo(
    '#points',
    { xPercent: -100, backgroundColor: '#123' },
    { xPercent: 0, backgroundColor: '#ABC' }
  )
  tl.fromTo('#time', { yPercent: 100 }, { yPercent: 0 })

  tl.progress(1)
  played.value = true
})

function start() {
  played.value ? tl.reverse() : tl.play()
  played.value = !played.value
}

function reverse() {
  tl.reverse()
}
</script>

<style>
.dotted {
  background: white;
  background-image: radial-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 0);
  background-size: 10px 10px;
}
</style>
