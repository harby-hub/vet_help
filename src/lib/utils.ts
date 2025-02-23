import type { Ref } from 'vue'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import * as images from '@/assets/images'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function importImage( name : string ) {
  return images[ name ]
}

