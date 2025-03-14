<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { nextTick, ref, watch } from 'vue'
import { FirestoreDatabase } from '@/plugins/firebase.ts'
import HeaderNav from '@/components/HeaderNav.vue'
import * as sections from '@/components/sections'
import { Button } from '@/components/ui/button'

let data = ref( [ ] )

watch( FirestoreDatabase , async ( newData ) => {
    data.value = [ ]
    await nextTick( ) ;
    data.value = newData.landing_page?.sections.filter( item => item.is_active )
} )

data.value = FirestoreDatabase.value.landing_page?.sections.filter( item => item.is_active )

const isDark = ref< boolean >( false ) 
const { t , locale } = useI18n({ useScope: 'global' , messages: {
    en : { direction : 'ltr' } ,
    ar : { direction : 'rtl' }
} } ) 

</script>

<template>
    <div :class="{ dark: isDark }" class="pt-40 px-2 bg-white dark:bg-gray-800 dark:text-white min-h-full" >
        <HeaderNav v-model:isDark="isDark" />
        <main class="h-full" :class="{ arabic : t( 'direction' ) === 'rtl' }" :dir="t( 'direction' )" >
            <template v-for="( { type , translate } , key ) in data" :key="key"> <component
                :id        = "( type + '_' + translate[ locale ].name ).replace( / /ig , '_' )" 
                :class="{[ type ]:true}"
                :is        = "sections[type]"
                :translate = "translate"
                :variables = "FirestoreDatabase?.variables"
            /> </template>
            <nav class="fixed w-full z-20 bottom-20 start-0">
                <div class="bg-Secondary-50 w-3/4 md:w-2/4 rounded-xl border-gray-200 dark:border-gray-600 dark:bg-gray-900 flex gap-4 p-4 md:px-8 mx-auto items-center">
                    <Button as="a" class="lg:h-[75px] w-100 md:flex-1"          variant="default"   icon="Phone"         :href="'tel:'+FirestoreDatabase?.variables.phone" >{{locale == 'ar' ? FirestoreDatabase?.variables.main_btn_right_ar : FirestoreDatabase?.variables.main_btn_right_en}}</Button>
                    <Button as="a" class="lg:h-[75px] w-15 flex-none md:flex-1" variant="Secondary" icon="MessageCircle" :href="FirestoreDatabase?.variables.whatsapp"     ><span class="hidden md:flex">{{locale == 'ar' ? FirestoreDatabase?.variables.main_btn_left_ar  : FirestoreDatabase?.variables.main_btn_left_en }}</span></Button>
                </div>
            </nav>
            <footer class="w-full mt-40 text-center border-t pt-5" v-html="FirestoreDatabase?.variables?.footer" />
        </main>
    </div>
</template>