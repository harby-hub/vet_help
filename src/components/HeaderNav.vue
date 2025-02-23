
<script setup lang="ts">
    import imgUrl from '../assets/images/logo.png'
    import { ref , watch } from 'vue'
    import { FirestoreDatabase } from '@/plugins/firebase.ts'
    import { useI18n } from 'vue-i18n'
    import { Switch } from '@/components/ui/switch'
    import { icon } from '@/components/ui/icon'
    import { Button } from '@/components/ui/button'
    const isDark         = defineModel< boolean >( 'isDark' )
    const menuHidden     = ref< boolean >( false )
    const listall        = ref( { en : { list : [ ] as string[ ] } , ar : { list : [ ] as string[ ] } } )
    const list           = ref( [ ] )
    const { t , locale } = useI18n( { useScope : 'global' , messages : {
        en : { lange : 'english' } ,
        ar : { lange : 'عربي' } ,
    } } ) 
    function togglelocal( ) {
        if      ( locale.value == 'en' ) locale.value = 'ar' ;
        else if ( locale.value == 'ar' ) locale.value = 'en' ;
    }
    watch( FirestoreDatabase , newdata => init( ) )
    watch( locale            , newdata => init( ) )
    function init( ){
        listall.value = { en : { list : [ ] } , ar : { list : [ ] } } 
        list.value = [ ]
        list.value = FirestoreDatabase.value?.landing_page?.sections.filter( ( section : any ) => section.is_active ).map( ( section : { translate : { [ key : string ] : { [ key : string ] : string } } } ) => ({
            en : section.translate.en.name ,
            ar : section.translate.ar.name ,
            type : section.type
        }) )
    } 
    init( ) ;
</script>
<template>
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center lg:justify-between lg:gap-0 justify-center sm:gap-4 mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img :src="imgUrl" class="h-20" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap">{{ FirestoreDatabase?.variables?.title ?? 'vet help clinic' }}</span>
            </a>
            <div class="flex items-center lg:order-2 md:order-1 space-x-3 sm:space-x-2 rtl:space-x-reverse">
                <Button @click="togglelocal" >{{ t( 'lange' ) }}</Button>
                <Switch v-model:checked="isDark" >
                    <template #thumb>
                        <icon v-if="isDark" name="Moon" :size="20" />
                        <icon v-else name="Sun" :size="20" />
                    </template>
                </Switch>
                <button @click="menuHidden=!menuHidden" aria-controls="navbar-sticky" aria-expanded="false" data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div class="text-center items-center justify-center w-full md:flex md:w-auto md:order-2 lg:order-1" :class="{ [ 'hidden' ] : ( !menuHidden ) }" id="navbar-sticky">
                <ul class="flex flex-col p-4 md:mt-0 md:p-4 md:px-5 border-2 md:mx-auto tw-border-solid border-solid border-gray-100 rounded-full bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row  md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <!-- <li>
                        <a href="#" class="block py-2 px-3 text-white bg-pink-700 rounded-sm sm:bg-transparent sm:text-pink-700 sm:p-0 sm:dark:text-pink-500" aria-current="page">{{locale}}</a>
                    </li> -->
                    <li v-for="item in list" >
                        <a :href="('#'+item.type+'_'+item[ locale ]).replace( / /ig , '_' )" class="block font-thin text-gray-900 rounded-sm hover:bg-gray-100 sm:hover:bg-transparent
                        sm:hover:text-pink-700 sm:p-0 sm:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700
                        dark:hover:text-white sm:dark:hover:bg-transparent dark:border-gray-700">{{item[ locale ]}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>