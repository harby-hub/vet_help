<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from '.'
import { cn } from '@/lib/utils'
import { Primitive      } from 'radix-vue'
import { buttonVariants } from '.'
import { icon as iconUi } from '@/components/ui/icon'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  icon?: string|null
  nsize?: number
}

const props = withDefaults( defineProps< Props > ( ) , {
  as      : 'button' ,
  icon    : null     ,
  nsize   : 25       ,
  variant : 'default'
} )
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn( buttonVariants( { variant , size } ) , props.class)"
  >
    <iconUi v-if="props.icon" :name="props.icon" :strokeWidth="3" :size="props.nsize" />
    <slot></slot>
  </Primitive>
</template>
