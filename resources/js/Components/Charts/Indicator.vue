<script setup>
import {Link} from "@inertiajs/vue3";

defineProps({
    name: {},
    value: {},
    icon: {},
    link: {}
})

</script>

<template>
    <div class="relative overflow-hidden rounded-lg bg-white dark:bg-grayish px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
        <dt>
            <div class="absolute rounded-md bg-cyan-600 p-3">
                <component :is="icon" aria-hidden="true" class="h-6 w-6 text-white"/>
            </div>
            <p class="ml-16 truncate text-sm font-medium text-gray-500 dark:text-gray-100">{{ name }}</p>
        </dt>
        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900 dark:text-white">{{ value }}</p>
            <div class="absolute inset-x-0 bottom-0 bg-gray-50 dark:bg-dark-gray  px-4 py-4 sm:px-6">
                <div class="text-sm">
                    <Link :href="link" class="font-medium text-cyan-600 hover:text-cyan-500"
                    >Voir détails <span class="sr-only"> {{ name }}</span></Link>
                </div>
            </div>
        </dd>
    </div>
</template>

<style scoped>

</style>
