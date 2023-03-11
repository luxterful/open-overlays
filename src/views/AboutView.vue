<template>
  <button @click="play">Play a sound</button>
</template>

<script>
import { useSound } from '@vueuse/sound'
import buttonSfx from '@/assets/sound.mp3'

export default {
  setup() {
    const { play } = useSound(buttonSfx)

    return {
      play
    }
  }
}
</script>
