<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { Button } from '@/components/ui/button'
    import * as icons from '@/components/icons'
    import { ref } from 'vue'
    import type { Section } from '@/lib/interface'

    const props = withDefaults(defineProps<Section>(), { translate: () => ({ en : { } , ar : { } }) })
    const { t , tm , locale } = useI18n( { useScope : 'global' , messages : props.translate as any } )
    const ishidden = ref( true )
</script>
<template>
    <section class="max-w-screen-xl relative overflow-hidden pt-20 mb-4 grid sm:grid-cols-1 gap-4 flex-wrap items-center justify-center text-center mx-auto" >
        <div class="flex gap-2 items-center justify-center">
            <icons.PetPaws class="w-8" />
            <div class="uppercase headline" v-text="t( 'services_headline' )" />
        </div>
        <div class="text-3xl lg:text-5xl font-[calibre]" v-text="t( 'services_title' )" />
        <div class="text-sm font-thin mb-8" v-text="t( 'services_description' )" />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <template v-for="( item , index ) in tm( 'services_services' )">
                <div v-if="item.is_active" class="mb-4 border-2 border-stone-300 rounded-2xl p-10 grid grid-cols-1 gap-2" :class="{ hidden : ( index >= 6 ? ishidden : false ) , 'text-left' : locale === 'en' , 'text-right' : locale === 'ar' }">
                    <component class="" :is="icons[item.icon]"/>
                    <div class="text-base" v-text="item.title" />
                    <div class="text-sm font-thin" v-text="item.description" />
                </div>
            </template>
        </div>
        <div class="" >
            <Button v-text="ishidden ? t( 'services_btn_show_more' ) : t( 'services_btn_show_Less' ) " @click="ishidden = ishidden === false ? true : false" />
        </div>
    </section>
</template>
