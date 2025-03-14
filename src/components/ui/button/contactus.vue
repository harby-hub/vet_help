<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { FirestoreDatabase } from '@/plugins/firebase.ts'
  import { ref , watch , nextTick } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { locale } = useI18n( { useScope : 'global' } )

  const href = ref( '#' ) ;
  watch( FirestoreDatabase , async ( newData ) => {
    href.value = '#'
    await nextTick( ) ;
    href.value = ( '#contactus_' + newData.landing_page.sections.find(( element ) => element.type === 'contactus' ).translate[ locale.value ].name ).replace( / /ig , '_' )
  } )
  href.value = ( '#contactus_' + FirestoreDatabase.value.landing_page.sections.find(( element ) => element.type === 'contactus' ).translate[ locale.value ].name ).replace( / /ig , '_' )
</script>

<template>
  <Button as="a" :href="href" variant="Secondary" > <slot></slot> </Button>
</template>
