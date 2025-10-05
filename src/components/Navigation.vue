<template>
  <div>
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-sm border-b border-border">
      <div class="flex items-center space-x-2">
        <h1 class="text-2xl font-medium text-primary">Pasticherria</h1>
      </div>
      <div class="flex items-center space-x-6">
        <button
          @click="() => $emit('navigate', 'home')"
          :class="`transition-colors ${
            currentPage === 'home' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`"
        >
          Home
        </button>
        <button
          @click="() => $emit('navigate', 'order')"
          :class="`transition-colors ${
            currentPage === 'order' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`"
        >
          Order
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation - Sticky Bottom -->
    <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50">
      <div class="flex items-center justify-around py-3">
        <Button
          :variant="currentPage === 'home' ? 'default' : 'ghost'"
          size="sm"
          @click="() => $emit('navigate', 'home')"
          class="flex flex-col items-center space-y-1 h-auto py-2"
        >
          <Home class="h-5 w-5" />
          <span class="text-xs">Home</span>
        </Button>
        <Button
          :variant="currentPage === 'order' ? 'default' : 'ghost'"
          size="sm"
          @click="() => $emit('navigate', 'order')"
          class="flex flex-col items-center space-y-1 h-auto py-2"
        >
          <ShoppingCart class="h-5 w-5" />
          <span class="text-xs">Order</span>
        </Button>
      </div>
    </nav>

    <!-- Mobile Logo Header -->
    <div class="md:hidden bg-background/80 backdrop-blur-sm border-b border-border px-6 py-4">
      <h1 class="text-xl font-medium text-primary text-center">Pasticherria</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Home, ShoppingCart } from 'lucide-vue-next'
import Button from './ui/Button.vue'

interface Props {
  currentPage: 'home' | 'order'
}

defineProps<Props>()

defineEmits<{
  navigate: [page: 'home' | 'order']
}>()
</script>