<script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
</script>

<template>
  <div>  
    <Navbar />
    <Transition>
      <router-view />
    </Transition>  
    <Footer />
  </div>  
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>