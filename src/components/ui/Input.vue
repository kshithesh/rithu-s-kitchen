<template>
  <input
    :type="type"
    :id="id"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :class="inputClasses"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: string
  id?: string
  placeholder?: string
  modelValue?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputClasses = computed(() => {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  
  return [baseClasses, props.class].filter(Boolean).join(' ')
})
</script>