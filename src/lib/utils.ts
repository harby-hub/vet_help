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

import type { Updater } from '@tanstack/vue-table'

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value
    = typeof updaterOrValue === 'function'
      ? updaterOrValue(ref.value)
      : updaterOrValue
}
