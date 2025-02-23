<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ButtonContactus , ButtonMap } from '@/components/ui/button'
import Doh_Hero from '@/assets/images/Doh_Hero.png'
import Cat_Hero from '@/assets/images/Cat_Hero.png'
import Heart_Hero from '@/assets/images/Heart_Hero.png'
import Tail_Hero from '@/assets/images/Tail_Hero.png'
import type { Section } from '@/lib/interface'

const props = withDefaults(defineProps<Section>(), { translate: () => ({ en : { } , ar : { } }) })
const { t , locale } = useI18n( { useScope : 'global' , messages : props.translate as any } )
</script>
<template>
    <section class="max-w-screen-xl relative overflow-hidden pt-20 mb-4 grid sm:grid-cols-1 lg:grid-cols-2 gap-4 text-pink-100 items-center justify-between mx-auto bg-pink-700 rounded-[20px] lg:rounded-[35px]" >
        <div class="p-5 lg:p-15 grid grid-cols-1 gap-4">
            <div class="text-4xl lg:text-6xl font-[calibre]" v-text="t( 'heros_title' )" />
            <div class="text-sm" v-text="t( 'heros_description' )" />
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4" >
                <ButtonContactus > {{ t( 'heros_btn_left'  ) }} </ButtonContactus>
                <ButtonMap       > {{ t( 'heros_btn_right' ) }} </ButtonMap>
            </div>
        </div>
        <div class="p-0 relative lg:p-0 grid grid-cols-2 gap-4 sm:h-100">
            <div><img :src="Doh_Hero" class="absolute z-3 lg:-left-20 lg:-top-30 w-100 arabic:scale-x-[-1] arabic:left-90 arabic:-top-80 arabic:w-90 arabic:sm:-top-30 sm:w-90 sm:left-10 sm:-top-30"/></div>
            <div><img :src="Cat_Hero" class="absolute z-2 lg:left-60 lg:top-5 w-80 arabic:scale-x-[-1] arabic:left-25 arabic:-top-28 arabic:w-65 arabic:sm:top-20 sm:left-80 sm:top-10"/></div>
            <div><img :src="Heart_Hero" class="absolute z-3 left-60 -top-40 arabic:sm:top-10 sm:-top-5 w-10"/></div>
            <div><img :src="Heart_Hero" class="absolute z-3 left-90 -top-40 arabic:sm:top-10 sm:-top-5 w-10 rotate-70"/></div>
            <div><img :src="Tail_Hero" class="absolute lg:left-130 lg:-top-10 w-25 arabic:scale-x-[-1] arabic:left-2 arabic:-top-50 arabic:w-25 arabic:sm:top-20 sm:left-160 sm:top-20"/></div>
        </div>
    </section>
</template>
