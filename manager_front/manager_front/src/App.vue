<script setup>
  import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div>  
    <Navbar />
    <Transition>
      <router-view />
    </Transition>  
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