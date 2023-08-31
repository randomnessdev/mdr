<template>
    <button @click="isOpen = true" class="p-2 px-6 text-white transition-all rounded-full hover:bg-white hover:text-primary-950 bg-secondary-800">
        <slot></slot>
    </button>
  
</template>
<script setup>
const isOpen = ref(false)
</script>
