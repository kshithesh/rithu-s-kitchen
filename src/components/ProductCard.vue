<template>
  <Card class="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-border">
    <div class="aspect-square overflow-hidden">
      <img
        :src="imageUrl"
        :alt="imageAlt"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        @error="handleImageError"
      />
    </div>
    <CardContent class="p-4">
      <h3 class="mb-2 text-foreground">{{ name }}</h3>
      <p class="text-sm text-muted-foreground leading-relaxed">{{ description }}</p>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import Card from './ui/Card.vue'
import CardContent from './ui/CardContent.vue'

interface Props {
  name: string
  description: string
  imageUrl: string
  imageAlt: string
}

defineProps<Props>()

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = `https://via.placeholder.com/400x400/f0f0f0/888888?text=${encodeURIComponent('Image Not Found')}`
}
</script>