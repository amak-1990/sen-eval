<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Datatable from '@/Components/Common/Tables/Datatable.vue';
import TableHeading from '@/Components/Common/Tables/TableHeading.vue';
import TableData from '@/Components/Common/Tables/TableData.vue';
import {computed, reactive, ref, watch} from 'vue';
import {Head, Link, router, useForm, usePage} from '@inertiajs/vue3';
import {getPagination, hasData} from '@/helpers/helper.js';
import EmptyState from '@/Components/Common/EmptyState.vue';
import axios from 'axios';
import Breadcrumbs from "@/Components/Common/Breadcrumbs.vue";
import {CheckIcon, ChevronUpDownIcon, EyeIcon, IdentificationIcon, TrashIcon} from "@heroicons/vue/20/solid/index.js";
import Separator from "@/Components/LayoutParts/Separator.vue";
import {Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions} from "@headlessui/vue";
import SubmitButton from "@/Components/Forms/SubmitButton.vue";
import RemoveAgentModal from "@/Components/Rating/RemoveAgentModal.vue";

const props = defineProps({
    agents: {
        type: Object,
    },
    others: {
        type: Object
    }
});

const pages = [{name: 'Mes Collaborateurs', href: '#', current: true}];
const others = props.others;
const pagination = computed(() => getPagination(props.agents));
const form = useForm({
    agent_id: null
});
const displayedData = ref(props.agents.data);
const search = reactive({keyword: '', fields: ['user_display_name', 'user_matricule']});
const searchAgent = reactive({keyword: '', fields: ['user_display_name', 'user_matricule']});
const query = ref('');
const filteredN1 = ref(others);
const open = ref(false);
const idToDelete = ref(props.agents[0]?.agent_id);


const addAgent = () => {
    form.post(route('agents.store'), {
        onError: err => {
            usePage().props.flash.notify = {type: 'error', message: err.agent_id}
        },
    })
}

const remove = (id) => {
    open.value = true;
    idToDelete.value = id;
}

const getFromDb = () => {
    return axios.post(route('users.search'), searchAgent);
}

watch(() => query.value, function (next) {
    let filtered = next === ''
        ? others
        : others.filter((n1) => {
            return n1.user_matricule.toLowerCase().includes(query.value.toLowerCase()) || n1.user_display_name.toLowerCase().includes(query.value.toLowerCase())
        })
    if (filtered.length > 0) filteredN1.value = filtered;
    else {
        if (next.length >= 3)
            getFromDb().then(res => filteredN1.value = res.data);
    }
})

watch(() => search.keyword, function (next) {
    if (next === '') {
        displayedData.value = props.agents.data;
    } else {
        axios.post(route('agents.search'), search).then(res => (displayedData.value = res.data));
    }
});

watch(() => props.agents, function (next) {
    displayedData.value = next.data;
    if (!displayedData.value.length > 0) {
        if (next.prev_page_url) router.get(next.prev_page_url)
        else router.get(next.first_page_url);
    }
});

</script>

<template>
    <AuthenticatedLayout>
        <Head title="Mes Collaborateurs"/>
        <div class="px-4 sm:px-6 lg:px-8">
            <Breadcrumbs :pages="pages"/>
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-2xl font-semibold leading-6 text-gray-900 dark:text-white">Mes Collaborateurs</h1>
                    <p class="mt-2 text-sm text-gray-700 dark:text-white">
                        La liste de mes collaborateurs à évaluer.
                    </p>
                </div>
            </div> 
            <Separator title="Trouver mes collaborateurs"/>
            <div class="bg-white dark:bg-grayish shadow sm:rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">Trouver vos collaborateurs</h3>
                    <div class="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-100">
                        <p>Rechercher les collaborateurs que vous devrez évaluer en utilisant leur matricule, nom ou prénom. </p>
                    </div>
                    <form class="mt-5 sm:flex sm:items-center" @submit.prevent="addAgent">
                        <div class="w-full sm:max-w-xl">
                            <Combobox v-model="form.agent_id">
                                <div class="relative">
                                    <ComboboxInput
                                        :class="form.errors.agent_id !== undefined ? 'focus:ring-red-600 ring-red-600' : ''"
                                        :display-value="(id) => { let selected = filteredN1.filter(n1 => n1.user_id === id)[0];
                                                            return selected ? selected.user_matricule + ' ' + selected.user_display_name : ''}"
                                        class="w-full rounded-md border-0 bg-white dark:bg-grayish py-1.5 pl-3 pr-12 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
                                        placeholder="Chercher un collaborateur..."
                                        @change="searchAgent.keyword = query = $event.target.value; "/>
                                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                        <ChevronUpDownIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </ComboboxButton>
                                    <ComboboxOptions v-if="filteredN1.length > 0"
                                                     class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-grayish py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        <ComboboxOption v-for="n1 in filteredN1" :key="n1.user_id" v-slot="{ active, selected }" :value="n1.user_id" as="template">
                                            <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-cyan-600  text-white' : 'text-gray-900 dark:text-white']">
                                                <div class="flex">
                                                    <span :class="['truncate', selected && 'font-semibold']">
                                                        {{ n1?.user_matricule + ' ' + n1?.user_display_name }}
                                                    </span>
                                                </div>
                                                <span v-if="selected"
                                                      :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-cyan-600']">
                                                    <CheckIcon aria-hidden="true" class="h-5 w-5"/>
                                                </span>
                                            </li>
                                        </ComboboxOption>
                                    </ComboboxOptions>
                                </div>
                            </Combobox>
                        </div>
                        <SubmitButton class="mt-3 sm:ml-3 sm:mt-0 sm:w-auto" type="submit">Ajouter</SubmitButton>
                    </form>
                </div>
            </div>
            <Separator title="Mes collaborateurs"/>
            <Datatable v-if="hasData(agents.data)" v-model="search.keyword" :pagination="pagination">
                <table v-if="displayedData.length > 0" class="min-w-full divide-y divide-gray-300 dark:divide-black">
                    <thead class="bg-gray-50 dark:bg-grayish">
                    <tr>
                        <TableHeading :first="true">Matricule</TableHeading>
                        <TableHeading>Nom</TableHeading>
                        <TableHeading>Poste</TableHeading>
                        <TableHeading>GF</TableHeading>
                        <TableHeading>NR</TableHeading>
                        <TableHeading>CR</TableHeading>
                        <TableHeading>Organisation</TableHeading>
                        <TableHeading></TableHeading>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-black bg-white dark:bg-grayish">
                    <tr v-for="user in displayedData" :key="user.user_id">
                        <TableData :first="true" class="whitespace-pre-line">{{ user.user_matricule }}</TableData>
                        <TableData>{{ user.user_display_name }}</TableData>
                        <TableData class="whitespace-pre-line">{{ user.user_title }}</TableData>
                        <TableData>{{ user.user_gf }}</TableData>
                        <TableData>{{ user.user_nr }}</TableData>
                        <TableData>{{ user.user_responsibility_center }}</TableData>
                        <TableData class="whitespace-pre-line">{{ user.org ? user.org.org_name : 'No Org' }}</TableData>
                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <div class="flex items-center justify-center">
                                <Link :href="route('agent-ratings.index', {agent: user.user_id})" class="group flex items-center px-4 py-2 text-sm">
                                    <EyeIcon aria-hidden="true" class="mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"/>
                                </Link>
                                <Link :href="route('agents.show', {agent: user.user_id})" class="group flex items-center px-4 py-2 text-sm">
                                    <IdentificationIcon aria-hidden="true" class="mr-3 h-5 w-5 text-gray-400 group-hover:text-amber-600"/>
                                </Link>
                                <button class="group flex items-center px-4 py-2 text-sm" @click="remove(user.user_id)">
                                    <TrashIcon aria-hidden="true" class="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-600"/>
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div v-else class="text-center bg-white dark:bg-grayish text-lg text-gray-600 py-4"> Aucun élément trouvé.</div>
            </Datatable>
            <EmptyState v-else message="Trouver vos collaborateurs à l'aide de la barre de recherche plus haut" title="Vous n'avez aucun collaborateur a évaluer."/>
            <RemoveAgentModal :id="idToDelete" :opened="open" @close-modal="open = false"/>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped></style>
