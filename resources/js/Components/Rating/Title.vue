<script setup>
import {computed} from "vue";

const props = defineProps({agent: Object, rating: Object})
const color = computed(() => {
    let mark = props.rating.rating_mark
    switch (true) {
        case (mark <= 25):
            return 'red';
        case (mark > 25 && mark <= 50):
            return 'amber';
        case (mark > 50 && mark <= 75):
            return 'green';
        default:
            return 'cyan';
    }
})
</script>

<template>
    <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
            <div class="flex justify-between items-center">
                <div class="sm:flex sm:justify-between sm:items-center gap-2">
                    <h1 class="text-2xl font-semibold leading-6 text-gray-900 dark:text-white">
                        Évaluation de {{ agent.user_display_name }}
                    </h1>
                    <p v-if="rating.rating_is_validated"
                       class="text-white bg-green-600 ring-green-600/20 rounded-md mt-0.5 px-1.5 py-0.5 text-xs font-bold ring-1 ring-inset max-w-fit">
                        Validé
                    </p>
                    <p
                        :class="color === 'red' ? 'bg-red-600 ring-red-600/20' : (color === 'amber' ? 'bg-amber-600 ring-amber-600/20' : (color === 'green' ? 'bg-green-600 ring-green-600/20' : 'bg-cyan-600  ring-cyan-600/20'))"
                        class="text-white rounded-md mt-0.5 px-1.5 py-0.5 text-xs font-bold ring-1 ring-inset max-w-fit">
                        <span class="flex items-center justify-center">
                            {{ color === 'red' ? 'Insuffisant' : (color === 'amber' ? 'Moyen' : (color === 'green' ? 'Satisfaisant' : 'Trés Satisfaisant')) }}
                        </span>
                    </p>
                </div>
                <span class="flex-shrink-0">
                    <span
                        :class="color === 'red' ? 'border-red-600 bg-red-600' : (color === 'amber' ? 'border-amber-600 bg-amber-600 text-white' : (color === 'green' ? 'border-green-600 bg-green-600 text-white' : 'border-cyan-600'))"
                        class="flex h-20 w-20 items-center justify-center rounded-full border-4">
                        <span
                            :class="color === 'red' ? 'text-white' : (color === 'amber' ? 'text-white' : (color === 'green' ? 'text-white' : 'text-cyan-600'))"
                            class="text-2xl font-bold">
	                        {{ rating.rating_mark }}
                        </span>
                    </span>

                </span>
            </div>
            <p class="dark:text-white">
                Matricule : {{ agent.user_matricule }}
                Année : {{ rating.phase.phase_year }}
            </p>
            <div class="sm:flex sm:items-center gap-2 dark:text-white">
                Évaluateur:
                <p class="text-sm text-gray-700 dark:text-white">
                    {{ rating.evaluator.user_display_name }}. Matricule : {{ rating.evaluator.user_matricule }}.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
