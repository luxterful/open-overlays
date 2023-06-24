<template>
  <div class="bg-gray-200 opacity-50 px-2 py-1 inline-block rounded-md">
    <div
      class="cursor-pointer h-8 rounded-md shadow-sm hover:shadow-md flex justify-center items-center dark:fill-white dark:bg-stone-700 w-full"
      @click="toggle"
    >
      <SunIcon class="w-5 h-5 block dark:hidden" />
      <MoonIcon class="w-5 h-5 hidden dark:block" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const toggle = typeof localStorage !== 'undefined' ? useAppearance() : () => {}

function useAppearance() {
  const query = window.matchMedia('(prefers-color-scheme: dark)')
  const classList = document.documentElement.classList

  let userPreference = localStorage.getItem('Appearance') || 'auto'

  let isDark = userPreference === 'auto' ? query.matches : userPreference === 'dark'

  query.onchange = (e) => {
    if (userPreference === 'auto') {
      setClass((isDark = e.matches))
    }
  }

  function toggle() {
    setClass((isDark = !isDark))

    userPreference = isDark ? (query.matches ? 'auto' : 'dark') : query.matches ? 'light' : 'auto'

    localStorage.setItem('Appearance', userPreference)
  }

  function setClass(dark: boolean): void {
    classList[dark ? 'add' : 'remove']('dark')
  }

  return toggle
}
</script>
