<script setup lang="ts">
import { computed } from 'vue';
import * as icons from "lucide-vue-next";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: Number,
  color: String,
  strokeWidth: Number,
  defaultClass: String
})

const icon = computed(() => icons[props.name]);
</script>

<template>
  <component
    :is="icon"
    :style="{ 
      height:size ,
      width:size
    }"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>