<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { FirestoreDatabase } from '@/plugins/firebase.ts'
  import { ref , watch , nextTick } from 'vue'
  const href = ref< string >( '#' ) ;
  watch( FirestoreDatabase , async ( newData ) => {
    href.value = '#'
    await nextTick( ) ;
    href.value = newData.variables.map
  } )
  href.value = FirestoreDatabase.value.variables.map
</script>

<template>
  <Button as="a" :href="href" icon="MapPin" :nsize="30" > <slot></slot> </Button>
</template>
