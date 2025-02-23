<script setup lang="ts">
import { AvatarFallback, AvatarRoot } from 'reka-ui'
</script>

<template>
  <AvatarRoot class="bg-blackA3 inline-flex h-[35px] w-[35px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
    <AvatarFallback class="text-red-700 leading-1 flex h-full w-full items-center justify-center bg-red-100 dark:text-pink-300  dark:bg-pink-800 text-lg font-bold">
      <slot></slot>
    </AvatarFallback>
  </AvatarRoot>
</template>
