<template>
  <div class="w-full h-full">
    <div class="flex flex-col h-full">
      <div class="flex-none h-10 flex items-center justify-center">
        <div class="text-md max-h-10 w-full text-center leading-none m-1 line-clamp-2">
          <slot name="label" />
        </div>
      </div>
      <div class="flex-1 p-1 overflow-hidden">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
