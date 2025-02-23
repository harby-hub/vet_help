<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ButtonContactus , ButtonMap } from '@/components/ui/button'
import { importImage } from '@/lib/utils'
import * as icons from '@/components/icons'
import type { Section } from '@/lib/interface'

const props = withDefaults(defineProps<Section>(), { translate: () => ({ en : { } , ar : { } }) })
const { t , tm , locale } = useI18n( { useScope : 'global' , messages : props.translate as any } )
</script>
<template>
    <section class="max-w-screen-xl relative overflow-hidden pt-20 mb-4 grid sm:grid-cols-1 lg:grid-cols-2 gap-4 flex-wrap items-center justify-between mx-auto" >
        <div class="h-full flex justify-center rounded-[25px] overflow-hidden relative bg-cover bg-center" :style="{ backgroundImage : 'url(' + importImage( t( 'brochure_image' ) ) + ')' }" />
        <div class="p-5 lg:p-15 grid grid-cols-1 gap-4">
            <div class="flex gap-2 items-center">
                <icons.PetPaws class="w-8" />
                <div class="uppercase headline" v-text="t( 'brochure_headline' )" />
            </div>
            <div class="text-4xl lg:text-6xl font-[calibre]" v-text="t( 'brochure_title' )" />
            <div class="text-sm font-thin mb-8" v-text="t( 'brochure_description' )" />
            <div class="w-full">
                <div class="w-full mb-4" v-for="( item , index ) in tm( 'brochure_list' )">
                    <div v-if="index != 0" class="mb-4 border-2 border-stone-300" ></div>
                    <div class="flex gap-4 items-center">
                        <component class="flex-none w-8" :is="icons[item.icon]"/>
                        <div class="text-base" v-text="item.text" />
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4" >
                <ButtonContactus > {{ t( 'brochure_btn_left'  ) }} </ButtonContactus>
                <ButtonMap       > {{ t( 'brochure_btn_right' ) }} </ButtonMap>
            </div>
            <img class="lg:hidden sm:w-full rounded-[25px] overflow-hidden relative bg-cover bg-center" :src="importImage( t( 'brochure_image' ) )" />
        </div>
    </section>
</template>
