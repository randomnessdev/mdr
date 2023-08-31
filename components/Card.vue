<template>
    <div class="w-full p-6 bg-white rounded-lg " :class="data.logo ? 'shadow-orange' : 'shadow-light'">
        <h3 v-if="data.title" class="mt-0" v-html="data.title" />
        <img v-else class="w-48 mx-auto mt-0" :src="'/cards/' + data.logo + '.svg'" :alt="data.description">
        <p class="pre" v-html="data.description" />
        <a v-if="data.more" :href="data.more" target="_blank" class="font-light no-underline text-secondary-800 hover:underline">En savoir plus</a>
    </div>
</template>
<script setup>
defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>