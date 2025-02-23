<script setup lang="ts">
    import { FirestoreDatabase  } from '@/plugins/firebase.ts'
</script>
<template>
    <section class="max-w-screen-xl grid sm:grid-cols-1 lg:grid-cols-2 gap-4 flex flex-wrap items-center justify-between mb-4 mx-auto p-5 lg:p-15" >
        <slot></slot>
        <pre style="text-wrap: wrap;"> {{ FirestoreDatabase.variables }} </pre>
        <pre style="text-wrap: wrap;"> {{ FirestoreDatabase.landing_page.sections  }} </pre>
    </section>
</template>
