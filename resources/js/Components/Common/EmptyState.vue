<script setup>
import {PlusIcon} from '@heroicons/vue/20/solid'
import {Link} from '@inertiajs/vue3'

const props = defineProps({
    title: {
        type: String,
    },
    message: {
        type: String,
    },
    link: {
        type: String
    },
    action: {
        type: String
    }
})
</script>
<template>
    <div class=" mt-16 text-center">
        <svg aria-hidden="true" class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  vector-effect="non-scaling-stroke"/>
        </svg>
        <h3 class="mt-2 text-sm font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-100">{{ message }}</p>
        <div v-if="action" class="mt-6">
            <Link :href="link" as="button"
                  class="inline-flex items-center rounded-md bg-cyan-600  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
                {{ action }}
                <PlusIcon aria-hidden="true" class="ml-1.5 h-5 w-5"/>
            </Link>
        </div>
    </div>
</template>

