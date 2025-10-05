<template>
  <div class="min-h-screen bg-background py-8 md:py-16">
    <div class="container mx-auto px-6 max-w-2xl">
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl mb-4 text-foreground">Place Your Order</h1>
        <p class="text-lg text-muted-foreground">
          Tell us what delicious treats you'd like, and we'll prepare them fresh for you
        </p>
      </div>

      <Card class="shadow-lg border-border">
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="space-y-2">
              <Label for="name">Full Name</Label>
              <Input
                id="name"
                v-model="formData.name"
                type="text"
                placeholder="Enter your full name"
                class="bg-input-background border-border"
              />
            </div>

            <div class="space-y-2">
              <Label for="email">Email Address</Label>
              <Input
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="Enter your email address"
                class="bg-input-background border-border"
              />
            </div>

            <div class="space-y-2">
              <Label for="phone">Phone Number</Label>
              <Input
                id="phone"
                v-model="formData.phone"
                type="tel"
                placeholder="Enter your phone number"
                class="bg-input-background border-border"
              />
            </div>

            <div class="space-y-2">
              <Label for="orderDetails">Order Details</Label>
              <Textarea
                id="orderDetails"
                v-model="formData.orderDetails"
                placeholder="Please describe what you'd like to order (e.g., 2 chocolate croissants, 1 dozen macarons in assorted flavors, etc.)"
                class="bg-input-background border-border min-h-[120px]"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              class="w-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Submit Order
            </Button>
          </form>
        </CardContent>
      </Card>

      <!-- Contact Information -->
      <div class="mt-8 text-center">
        <h3 class="mb-4 text-foreground">Need Help?</h3>
        <p class="text-muted-foreground mb-2">
          Call us at <span class="text-primary">+1 (555) 123-BAKE</span>
        </p>
        <p class="text-muted-foreground">
          Or email us at <span class="text-primary">orders@pasticherria.com</span>
        </p>
      </div>

      <!-- Mobile spacing for bottom navigation -->
      <div class="md:hidden h-20"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Button from './ui/Button.vue'
import Input from './ui/Input.vue'
import Textarea from './ui/Textarea.vue'
import Label from './ui/Label.vue'
import Card from './ui/Card.vue'
import CardHeader from './ui/CardHeader.vue'
import CardTitle from './ui/CardTitle.vue'
import CardContent from './ui/CardContent.vue'

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  orderDetails: ''
})

const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref<'success' | 'error'>('success')

const handleSubmit = () => {
  // Simple validation
  if (!formData.name || !formData.email || !formData.phone || !formData.orderDetails) {
    showToast.value = true
    toastMessage.value = "Please fill in all fields"
    toastType.value = 'error'
    setTimeout(() => showToast.value = false, 3000)
    return
  }

  // Mock submission
  showToast.value = true
  toastMessage.value = "Order submitted successfully! We'll contact you soon."
  toastType.value = 'success'
  setTimeout(() => showToast.value = false, 3000)
  
  // Reset form
  Object.assign(formData, {
    name: '',
    email: '',
    phone: '',
    orderDetails: ''
  })
}
</script>