<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { Button } from '@/components/ui/button'
    import { Input } from '@/components/ui/input'
    import {
        Select,
        SelectContent,
        SelectItem,
        SelectTrigger,
        SelectValue,
    } from '@/components/ui/select'
    import * as icons from '@/components/icons'
    import { computed, ref, watch } from 'vue'
    import { icon } from '@/components/ui/icon'
    import { FirestoreDatabase } from '@/plugins/firebase.ts'
    import type { Section } from '@/lib/interface'

    const props = withDefaults(defineProps<Section>(), { translate: () => ({ en : { } , ar : { } }) , variables: () => ({ }) })
    const { t , tm , locale } = useI18n( { useScope : 'global' , messages : props.translate as any } )

    const address = computed( () => locale.value === 'en' ? props.variables.en_address : props.variables.ar_address )
    const name = ref( '' )
    const code = ref( props.variables.mobilePrifx[ 0 ] )
    const phone = ref( '' )
    const service = ref( )
    const message = ref( '' )
    const services = ref( [ ] )

    function loudservices(){
        services.value = FirestoreDatabase.value.landing_page.sections.find(( element ) => element.type === 'services' ).translate[ locale.value ].services_services.filter( service => service.is_active ).map( service => service.title )
    }
    async function submit( ) {
        const response = await fetch( props.variables.sheet , {
            method: "POST",
            body: JSON.stringify([
                name.value ,
                code.value.value + phone.value ,
                service.value ,
                message.value ,
            ])
        });
        console.log(
            name.value ,
            code.value.value + phone.value ,
            service.value ,
            message.value ,
            response
        )
    }

    loudservices()
    watch( locale            , loudservices )
    watch( FirestoreDatabase , loudservices )
</script>
<template>
    <section class="max-w-screen-xl relative overflow-hidden pt-20 mb-4 grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto lg:text-left text-center" >
        <div class="grid gap-4 items-center">
            <div class="flex gap-2 items-center justify-center justify-start">
                <icons.PetPaws class="w-8" />
                <div class="uppercase headline" v-text="t( 'contactus_headline' )" />
            </div>
            <div class="text-3xl lg:text-5xl font-[calibre]" v-text="t( 'contactus_title' )" />
            <div class="text-sm font-thin mb-8" v-text="t( 'contactus_description' )" />
            <div class="grid gap-2 items-center lg:justify-start justify-center">
                <a :href="variables.map" class="flex mb-5 pb-5 gap-2 border-b"> <icon class="headline" name="MapPin" :size="20" /> <div>{{address}}</div> </a>
                <a :href="'tel:'+variables.phone" class="flex mb-5 pb-5 gap-2 border-b"> <icon class="headline" name="Phone" :size="20" /> <div>{{props.variables.phone}}</div> </a>
                <div class="flex gap-4 lg:justify-start justify-center">
                    <a :href="variables.facebook"  ><icon class="headline" name="Facebook"          :size="40" /></a>
                    <a :href="variables.messenger" ><icon class="headline" name="MessageCirclePlus" :size="40" /></a>
                    <a :href="variables.Instagram" ><icon class="headline" name="Instagram"         :size="40" /></a>
                    <a :href="variables.whatsapp"  ><icon class="headline" name="MessageCircle"     :size="40" /></a>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-5 p-10 bg-pink-700 rounded-[20px] lg:rounded-[35px]">
            <div> <Input v-model="name" :placeholder="t( 'contactus_field.full_name' )" /> </div>
            <div class="flex gap-2" >
                <div>
                    <Select v-model="code">
                        <SelectTrigger class="flex gap-2"> <SelectValue > {{code.icon}} </SelectValue> <SelectValue > {{code.code}} </SelectValue> </SelectTrigger>
                        <SelectContent> <SelectItem v-for="Prifx in variables.mobilePrifx.filter( prifx => prifx.is_active )" :value="Prifx"> {{Prifx.icon}} {{Prifx.code}} </SelectItem> </SelectContent>
                    </Select>
                </div>
                <Input v-model="phone" :placeholder="t( 'contactus_field.mobile_number' )" />
            </div>
            <div> <Select v-model="service" :dir="t( 'contactus_direction' )"  >
                <SelectTrigger> <SelectValue  :placeholder="t( 'contactus_field.select_service' )" /> </SelectTrigger>
                <SelectContent> <SelectItem  v-for="serviced in services" :value="serviced"> {{serviced}} </SelectItem> </SelectContent>
            </Select> </div>
            <div> <Input v-model="message" :placeholder="t( 'contactus_field.message' )" /> </div>
            
            <Button @click="submit" data-outline="true" v-text="t( 'contactus_btn_send_message' )" />
        </div>
    </section>
</template>
