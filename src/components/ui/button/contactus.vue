<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { FirestoreDatabase } from '@/plugins/firebase.ts'
  import { ref , watch , nextTick } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t , tm , locale } = useI18n( { useScope : 'global' } )

  const data = ref( '#' ) ;
  watch( FirestoreDatabase , async ( newData ) => {
    data.value = '#'
    await nextTick( ) ;
    data.value = ( '#contactus_' + newData.landing_page.sections.find(( element ) => element.type === 'contactus' ).translate[ locale.value ].name ).replace( / /ig , '_' )
  } )
  data.value = ( '#contactus_' + FirestoreDatabase.value.landing_page.sections.find(( element ) => element.type === 'contactus' ).translate[ locale.value ].name ).replace( / /ig , '_' )
</script>

<template>
  <a :href="data"><Button class="w-full" data-outline="true" > <slot></slot> </Button></a>
</template>
