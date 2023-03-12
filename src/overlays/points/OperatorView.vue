<template>
  <div>
    <div class="flex flex-wrap gap-5">
      <div class="flex flex-col gap-2">
        <TextInput label="Label left" v-model="data.labelLeft" class="inline-block" />
        <NumberInput label="Counter left" v-model="data.counterLeft" class="inline-block" />
      </div>
      <div class="flex flex-col gap-2">
        <TextInput label="Label right" v-model="data.labelRight" class="inline-block" />
        <NumberInput label="Counter right" v-model="data.counterRight" class="inline-block" />
      </div>
    </div>
    <div>
      <TextInput label="Current Game" v-model="data.currentGame" class="inline-block" />
    </div>
    <div class="mt-4 flex gap-10">
      <div><input v-model="data.leftWon" type="checkbox" class="mr-2" />left Won</div>
      <div><input v-model="data.rightWon" type="checkbox" class="mr-2" />right Won</div>
    </div>
    <div class="mt-4">
      <input v-model="data.showOverlay" type="checkbox" class="mr-2" />show overlay
    </div>
  </div>
</template>

<script setup lang="ts">
import NumberInput from '@/components/NumberInput.vue'
import TextInput from '@/components/TextInput.vue'

defineProps(['data'])
</script>
