import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Button          } from './Button.vue'
export { default as ButtonMap       } from './Map.vue'
export { default as ButtonContactus } from './contactus.vue'

export const buttonVariants = cva(
  [
    'cursor-pointer', 'rounded-full', 'flex' , 'items-center', 'justify-center', 'gap-2', 'whitespace-nowrap', 'text-center',
    'ring-1', 'ring-offset-background', 'transition-colors',
    'disabled:pointer-events-none', 'disabled:opacity-50',
    'focus-visible:outline-none', 'focus-visible:ring-2', 'focus-visible:ring-ring', 'focus-visible:ring-offset-2',
    'focus:ring-2'        , 'focus:transparent-none'     , 'focus:ring-Primary-50' , 'focus:ring-Primary-900' ,
    'dark:bg-Primary-600' , 'dark:hover:bg-Secondary-50' , 'dark:focus:text-Secondary-50'
  ] ,
  {
    variants: {
      variant: {
        default     : [ 'bg-Primary-800'  , 'hover:bg-Primary-900'   , 'text-Secondary-100'       , 'hover:text-Secondary-200' , 'ring-Primary-50'        , 'hover:ring-Primary-100' ] ,
        Secondary   : [ 'bg-Secondary-50' , 'hover:bg-Secondary-150' , 'text-Primary-800'         , 'hover:text-Primary-900'   , 'ring-Secondary-50'      , 'hover:ring-Primary-900' ] ,
        transparent : [ 'bg-transparent'  , 'text-Secondary-50'      , 'hover:text-Secondary-150' , 'ring-Secondary-50'        , 'hover:ring-Primary-900'                            ] ,
        transparentd : [ 'bg-transparent'  , 'text-Primary-900'      , 'hover:text-Secondary-150' , 'ring-Secondary-50'        , 'hover:ring-Primary-900'                            ] ,
        destructive : [ 'bg-destructive' , 'text-destructive-foreground' , 'shadow-sm' , 'hover:bg-destructive/90'                                                                   ] ,
        outline     : [ 'border' , 'border-input' , 'bg-background' , 'shadow-sm' , 'hover:bg-accent' , 'hover:text-accent-foreground'                                               ] ,
        secondary   : [ 'bg-secondary' , 'text-secondary-foreground' , 'shadow-sm' , 'hover:bg-secondary/80'                                                                         ] ,
        ghost       : [ 'hover:bg-accent' , 'hover:text-accent-foreground'                                                                                                           ] ,
        link        : [ 'text-primary' , 'underline-offset-4' , 'hover:underline'                                                                                                    ] ,
      },
      size: {
        default: 'h-[46px] px-2 py-4 text-[16px] leading-[16px]',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>