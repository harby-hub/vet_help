<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input v-model="modelValue" :class="cn('flex h-10 w-full rounded-md border border-pink-200 bg-pink-700 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-pink-200 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-pink-800 dark:bg-pink-950 dark:ring-offset-pink-950 dark:placeholder:text-pink-400 dark:focus-visible:ring-pink-300', props.class)">
</template>
