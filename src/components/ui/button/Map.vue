<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { FirestoreDatabase } from '@/plugins/firebase.ts'
  import { ref , watch , nextTick } from 'vue'
  const data = ref( ) ;
  watch( FirestoreDatabase , async ( newData ) => {
    data.value = { }
    await nextTick( ) ;
    data.value = newData.variables.map
  } )
  data.value = FirestoreDatabase.value.variables.map
</script>

<template>
  <a :href="data"> <icon class="headline" name="MapPin" :size="20" />  <Button icon="MapPin" > <slot></slot> </Button> </a>
</template>
