<script setup>

import {ChevronDoubleLeftIcon} from "@heroicons/vue/20/solid/index.js";
import {Link} from "@inertiajs/vue3";
</script>

<template>
    <div class="flex justify-center items-center min-h-screen h-screen px-4 bg-white dark:bg-grayish place-content-center">
        <div class="text-center">
            <h1 class="sm:text-[400px] text-9xl font-black text-gray-200">404</h1>
            <p class="text-2xl font-bold text-gray-900 dark:text-white">
                Uh-oh!
            </p>
            <p class="mb-4 text-gray-500 dark:text-gray-100">Cette Page N'existe Pas</p>
            <Link
                :href="route('agents.index')"
                as="button"
                class="inline-flex gap-x-1.5 rounded-md bg-cyan-600  px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
                <ChevronDoubleLeftIcon class="-mr-0.5 h-5 w-5"/>
                Retour
            </Link>
        </div>
    </div>
</template>

<style scoped>

</style>
