<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { nextTick, ref, watch } from 'vue'
import { FirestoreDatabase } from '@/plugins/firebase.ts'
import HeaderNav from '@/components/HeaderNav.vue'
import * as sections from '@/components/sections'
import { Button } from '@/components/ui/button'

let data = ref( [ ] )

watch( FirestoreDatabase , async ( newData ) => {
    data.value = { }
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
                <div class="bg-orange-100 w-3/4 rounded-xl border-gray-200 dark:border-gray-600 dark:bg-gray-900 max-w-screen-xl grid grid-cols-2 gap-4 p-4 mx-auto items-center justify-between">
                    <a :href="FirestoreDatabase?.variables.whatsapp"     ><Button class="w-full"> {{ locale == 'ar' ? FirestoreDatabase?.variables.main_btn_left_ar  : FirestoreDatabase?.variables.main_btn_left_en  }} </Button></a>
                    <a :href="'tel:'+FirestoreDatabase?.variables.phone" ><Button class="w-full"> {{ locale == 'ar' ? FirestoreDatabase?.variables.main_btn_right_ar : FirestoreDatabase?.variables.main_btn_right_en }} </Button></a>
                </div>
            </nav>
            <footer class="w-full mt-40 text-center border-t pt-5" v-html="FirestoreDatabase?.variables?.footer" />
        </main>
    </div>
</template>