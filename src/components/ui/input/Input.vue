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
  <input v-model="modelValue" :class="cn('flex h-10 w-full rounded-md border border-Primary-200 bg-Primary-800 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-Primary-200 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-Primary-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-Primary-800 dark:bg-Primary-950 dark:ring-offset-Primary-950 dark:placeholder:text-Primary-400 dark:focus-visible:ring-Primary-300', props.class)">
</template>
