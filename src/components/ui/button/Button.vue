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
  as   : 'button' ,
  icon : null     ,
  nsize : 25     ,
} )
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn( buttonVariants( { variant , size } ) , [
      'rounded-full'      , 'cursor-pointer' ,
      'px-4'              , 'py-8' ,

      `bg-pink-700`                     , 'hover:bg-pink-800' ,
      `data-[outline=true]:bg-pink-50` , 'data-[outline=true]:hover:bg-pink-200' ,

      'text-base'                           , 'text-center' ,
      'text-pink-50'                     , 'hover:text-pink-100',
      'data-[outline=true]:text-pink-700' , 'data-[outline=true]:hover:text-pink-800',

      'ring-1' ,
      'ring-pink-50' , 'hover:ring-pink-100',
      'data-[outline=true]:ring-pink-700' , 'data-[outline=true]:hover:ring-pink-900',

      'focus:ring-2'      , 'focus:outline-none'     , 'focus:ring-pink-50' , 'data-[outline=true]:focus:ring-pink-900' ,
      'dark:bg-pink-600'  , 'dark:hover:bg-pink-700' , 'dark:focus:text-pink-800'

    ] , props.class)"
  >
    <iconUi v-if="props.icon" :name="props.icon" :strokeWidth="3" :size="nsize" />
    <slot></slot>
  </Primitive>
</template>
