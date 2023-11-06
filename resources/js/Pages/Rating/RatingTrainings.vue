<script setup>

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head, Link, router, useForm, usePage} from "@inertiajs/vue3";
import Title from "@/Components/Rating/Title.vue";
import Breadcrumbs from "@/Components/Common/Breadcrumbs.vue";
import Tabs from "@/Components/Rating/Tabs.vue";
import {computed, reactive, ref, watch} from "vue";
import {
    Listbox, ListboxButton,
    ListboxOption, ListboxOptions
} from "@headlessui/vue";
import Separator from "@/Components/LayoutParts/Separator.vue";
import SubmitButton from "@/Components/Forms/SubmitButton.vue";
import {CheckIcon, ChevronUpDownIcon, EyeIcon, IdentificationIcon, TrashIcon} from "@heroicons/vue/20/solid/index.js";
import {getPagination, hasData} from "@/helpers/helper.js";
import InputLabel from "@/Components/Forms/InputLabel.vue";
import InputError from "@/Components/Forms/InputError.vue";
import Datatable from "@/Components/Common/Tables/Datatable.vue";
import EmptyState from "@/Components/Common/EmptyState.vue";
import TableData from "@/Components/Common/Tables/TableData.vue";
import TableHeading from "@/Components/Common/Tables/TableHeading.vue";


const props = defineProps({
    agent:{},
    rating: {},
    types:{type: Array},
    trainings: {}
})

const pagination = computed(() => getPagination(props.trainings));

const displayedData = ref(props.trainings.data);

const isEvaluated = computed(() => {
    return usePage().props.auth.user.user_id === props.rating.evaluated_id
})

const pages = isEvaluated.value ? [
    { name: 'Mes Evaluations', href: route('ratings.index',{agent_rating: props.rating.rating_id}), current: false },
    { name: 'Evaluation', href: '#', current: true },
] : [
    { name: 'Mes Agents', href: route('agents.index'), current: false },
    { name: 'Evaluations', href: route('agent-ratings.index',{agent: props.agent.user_id}), current: false },
    { name: 'Evaluation', href: '#', current: true },
]

const form = useForm(isEvaluated.value ? {
    asked_by_evaluated: 1,
    training_type_id: hasData(props.types) ? props.types[0].training_type_id : null
} : {
    asked_by_evaluator: 1,
    training_type_id: hasData(props.types) ? props.types[0].training_type_id : null
})

const revoke = useForm(isEvaluated.value ? {
    asked_by_evaluated: 0,
    training_type_id: hasData(props.types) ? props.types[0].training_type_id : null
} : {
    asked_by_evaluator: 0,
    training_type_id: hasData(props.types) ? props.types[0].training_type_id : null
})

const search = reactive({
    keyword: '',
    fields: ['user_display_name','user_matricule'],
});


const submit = () => {
    form.post(route('rating-trainings.store',{rating: props.rating.rating_id}))
}

watch(()=> props.trainings,
    function (next) {
        displayedData.value = next.data;
        if(!displayedData.value.length >0) {
            if(next.prev_page_url) router.get(next.prev_page_url)
            else router.get(next.first_page_url);
        }
    }
);

</script>

<template>
<AuthenticatedLayout>
    <Head title="Profil"/>
    <div class="px-4 sm:px-6 lg:px-8">
        <Breadcrumbs :pages="pages"/>
        <Title :agent="agent" :rating="rating" />
        <Tabs :rating_id="props.rating.rating_id" :agent_id="props.agent.user_id" :evaluated="isEvaluated"/>
        <div class="mt-8 bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <h3 class="text-base font-semibold leading-6 text-gray-900">Demander une formation</h3>
                <div class="mt-2 max-w-xl text-sm text-gray-500">
                    <p>Rechercher une formation et ajouter la á la liste des demandes pour cette évaluation. </p>
                </div>
                <form class="mt-5 sm:flex sm:items-center" @submit.prevent="submit">
                    <div class="w-full sm:max-w-xl">
                        <div class="relative">
                            <Listbox v-model="form.training_type_id">
                                <div class="relative">
                                    <ListboxButton class="w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-sm sm:leading-6" :class="form.errors.phase_id ? 'ring-red-300':'ring-gray-300'">
                                        <span v-if="hasData(types)" class="block truncate">{{ types.filter((type) => type.training_type_id === form.training_type_id)[0].training_type_name }}</span>
                                        <span v-else class="block truncate">Aucune formation disponible pour l'instant.</span>
                                        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </ListboxButton>
                                    <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                                        <ListboxOptions v-if="hasData(types)" class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            <ListboxOption as="template" v-for="type in types" :key="type.training_type_id" :value="type.training_type_id" v-slot="{ active, selected }">
                                                <li :class="[active ? 'bg-cyan-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                                    <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ type.training_type_name }}</span>
                                                    <span v-if="selected" :class="[active ? 'text-white' : 'text-cyan-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                </li>
                                            </ListboxOption>
                                        </ListboxOptions>
                                    </transition>
                                </div>
                            </Listbox>
                        </div>
                        <InputError :message="form.errors.training_type_id"/>
                    </div>
                    <SubmitButton type="submit" class="sm:ml-3 sm:mt-0 sm:w-auto">Demander</SubmitButton>
                </form>
            </div>
        </div>
        <Separator title="Formations Demandées" />
        <Datatable :pagination="pagination" v-if="hasData(trainings.data)" v-model="search.keyword">
            <table v-if="displayedData.length > 0" class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                <tr>
                    <TableHeading :first="true">Type</TableHeading>
                    <TableHeading>Demandée par l'évaluateur</TableHeading>
                    <TableHeading>Demandée par l'évalué</TableHeading>
                    <TableHeading></TableHeading>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="training in displayedData" :key="training.rating_training_id">
                    <TableData class="whitespace-pre-line" :first="true">{{ training.type.training_type_name }}</TableData>
                    <TableData>
                        <span :class="training.asked_by_evaluator ? 'bg-green-50 text-green-700 ring-green-600/20' : 'bg-red-50 text-red-700 ring-red-600/20'" class="inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ring-1 ring-inset ">
                            {{ training.asked_by_evaluator ? 'Oui' : 'Non' }}
                        </span>
                    </TableData>
                    <TableData>
                        <span :class="training.asked_by_evaluated ? 'bg-green-50 text-green-700 ring-green-600/20' : 'bg-red-50 text-red-700 ring-red-600/20'" class="inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ring-1 ring-inset ">
                            {{ training.asked_by_evaluated ? 'Oui' : 'Non' }}
                        </span>
                    </TableData>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <div class="flex items-center justify-center">
                            <button v-if="(isEvaluated && training.asked_by_evaluated) || (!isEvaluated && training.asked_by_evaluator)" @click="revoke.put(route('rating-trainings.update',{rating: rating.rating_id,rating_training: training.rating_training_id}))" type="button" class="rounded-lg bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                                Annuler Demande
                            </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <div v-else class="text-center bg-white text-lg text-gray-600 py-4"> Aucun élément trouvé. </div>
        </Datatable>
        <EmptyState v-else title="Aucune formation demandée pour l'instant." message="Demander une formation en utilisant la liste déroulante en haut."/>
    </div>
</AuthenticatedLayout>
</template>

<style scoped>

</style>