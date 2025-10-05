<template>
  <div class="min-h-screen bg-background">
    <Navigation 
      :current-page="currentPage" 
      @navigate="setCurrentPage" 
    />
    
    <Homepage 
      v-if="currentPage === 'home'"
      @navigate-to-order="navigateToOrder" 
    />
    <OrderForm v-else />
    
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navigation from './components/Navigation.vue'
import Homepage from './components/Homepage.vue'
import OrderForm from './components/OrderForm.vue'
import Toaster from './components/ui/Toaster.vue'

type PageType = 'home' | 'order'

const currentPage = ref<PageType>('home')

const setCurrentPage = (page: PageType) => {
  currentPage.value = page
}

const navigateToOrder = () => {
  currentPage.value = 'order'
}
</script>