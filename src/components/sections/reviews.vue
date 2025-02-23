<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { Button } from '@/components/ui/button'
    import { icon }from '@/components/ui/icon'
    import * as icons from '@/components/icons'
    import { ref } from 'vue'
    import { AvatarFallback } from '@/components/ui/avatar'
    import type { Section } from '@/lib/interface'

    const props = withDefaults(defineProps<Section>(), { translate: () => ({ en : { } , ar : { } }) })
    const { t , tm , locale } = useI18n( { useScope : 'global' , messages : props.translate as any } )
    const ishidden = ref( true )
</script>
<template>
    <section class="max-w-screen-xl relative overflow-hidden pt-20 mb-4 grid sm:grid-cols-1 gap-4 flex flex-wrap items-center justify-center text-center mx-auto" >
        <div class="flex gap-2 items-center justify-center">
            <icons.PetPaws class="w-8" />
            <div class="uppercase headline" v-text="t( 'reviews_headline' )" />
        </div>
        <div class="text-3xl lg:text-5xl font-[calibre]" v-text="t( 'reviews_title' )" />
        <div class="grid grid-cols-1 relative overflow-hidden lg:grid-cols-3 border-2 border-stone-300 rounded-2xl"> <template v-for="( item , index ) in tm( 'reviews_reviews' )">
            <div v-if="item.is_active" class="border-2 border-stone-300 p-10 grid grid-cols-1 gap-2" :class="{ hidden : ( index >= 6 ? ishidden : false ) , 'text-left' : locale === 'en' , 'text-right' : locale === 'ar' }">
                <div class="flex items-center gap-2" > <div class="flex gap-1" > <template v-for="star in item.stars"> <icon name="Star" :size="15" fill="#f0b100" /> </template> </div> {{ item.stars }} </div>
                <div class="text-sm font-thin" v-text="item.text" />
                <div class="flex items-center gap-4">
                    <AvatarFallback class="uppercase">{{item.name[0]}}</AvatarFallback>
                    <div class="text-base" v-text="item.name" />
                </div>
            </div>
        </template> </div>
        <div>
            <Button v-text="ishidden ? t( 'reviews_btn_show_more' ) : t( 'reviews_btn_show_Less' ) " @click="ishidden = ishidden === false ? true : false" />
        </div>
    </section>
</template>
