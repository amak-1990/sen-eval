<script setup>
const props = defineProps({
    title: {
        type: String
    }
})
</script>

<template>
    <div class="relative mt-8 mb-8">
        <div aria-hidden="true" class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-600"/>
        </div>
        <div class="relative flex justify-center">
            <span class="bg-gray-100 dark:bg-dark-gray px-3 text-base font-semibold leading-6 text-gray-900 dark:text-white">{{ title }}</span>
        </div>
    </div>
</template>

<style scoped></style>
