<template>
  <div class="relative bg-white border border-green-300 rounded-md m-10 -skew-x-12">
    <div class="absolute -mt-5 -ml-5 bg-green-600 p-2 rounded md text-white">FACT CHECK</div>
    <div class="pt-7 px-4 pb-4">
      {{ data.fact }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['data'])
</script>
