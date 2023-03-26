<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ConnectionState from '@/components/ConnectionState.vue'
import overlays from '@/project/overlays'

const overlayKeys = Object.keys(overlays)
</script>

<template>
  <div class="flex h-screen w-full">
    <header class="flex flex-none flex-col bg-slate-800 h-full w-42">
      <div class="flex-none text-white text-xl p-2 h-11">Overlays</div>
      <div class="grow border-t-2 border-slate-700">
        <nav class="flex flex-col justify-between">
          <RouterLink
            v-for="overlayKey in overlayKeys"
            :key="overlayKey"
            class="text-white hover:bg-slate-500 p-2"
            :to="`/overlays/${overlayKey}`"
          >
            {{ overlays[overlayKey].displayName }}
          </RouterLink>
        </nav>
      </div>
      <div class="p-2">
        <ConnectionState class="w-full" />
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-slate-600;
}
</style>
