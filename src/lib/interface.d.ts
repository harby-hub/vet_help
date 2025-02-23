
export interface SectionPayloud {
  translate?: translate
  type  : 'portray'
  is_active  : bool
}

export interface translate {
  en : { }
  ar : { }
}
export interface variables{
  map        ?: string
  facebook   ?: string
  whatsapp   ?: string
  messenger  ?: string
  title      ?: string
  phone      ?: string
  Instagram  ?: string
  en_address ?: string
  ar_address ?: string
}

import type { PrimitiveProps } from 'radix-vue'

export interface Section extends PrimitiveProps{
  translate ?: translate
  variables ?: variables
}
