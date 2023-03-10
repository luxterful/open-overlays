<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ConnectionState from '@/components/ConnectionState.vue'
import overlays from '@/overlays'

const overlayKeys = Object.keys(overlays)
</script>

<template>
  <div class="flex h-screen w-full">
    <header class="flex flex-col bg-slate-800 h-full">
      <div class="flex-none text-white text-xl p-2 h-11">Overlays</div>
      <div class="grow p-2 border-t-2 border-slate-700">
        <nav class="flex flex-col justify-between gap-2">
          <RouterLink
            v-for="overlayKey in overlayKeys"
            :key="overlayKey"
            class="text-white"
            :to="`/overlays/${overlayKey}`"
          >
            {{ overlays[overlayKey].displayName }}
          </RouterLink>
        </nav>
      </div>
      <div class="p-2">
        <ConnectionState class="flex-none" />
      </div>
    </header>
    <RouterView />
  </div>
</template>
