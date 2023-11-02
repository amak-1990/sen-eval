<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Datatable from '@/Components/Common/Tables/Datatable.vue';
import TableHeading from '@/Components/Common/Tables/TableHeading.vue';
import TableData from '@/Components/Common/Tables/TableData.vue';
import {computed, reactive, ref, watch} from 'vue';
import {Head, Link, router} from '@inertiajs/vue3';
// import DeleteModal from '@/Components/Common/DeleteModal.vue';
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue';
import {ChevronDownIcon, PencilSquareIcon, TrashIcon, PlusIcon, EyeIcon} from '@heroicons/vue/20/solid';
import {getPagination, hasData} from '@/helpers/helper.js';
import EmptyState from '@/Components/Common/EmptyState.vue';
import axios from 'axios';
import Breadcrumbs from "@/Components/Common/Breadcrumbs.vue";

const props = defineProps({
    orgs: {
        type: Object,
    },
});

const pagination = computed(() => getPagination(props.orgs));

const displayedData = ref(props.orgs.data);

const search = reactive({
    keyword: '',
    fields: ['org_name','org_type','org_responsibility_center'],
});

watch(
    () => search.keyword,
    function (next) {
        if (next === '') {
            displayedData.value = props.orgs.data;
        } else {
            axios.post(route('orgs.search'), search).then(res => (displayedData.value = res.data));
        }
    }
);

watch(()=> props.orgs,
    function (next) {
        displayedData.value = next.data;
        if(!displayedData.value.length > 0) {
            if(next.prev_page_url) router.get(next.prev_page_url)
            else router.get(next.first_page_url);
        }
    }
);

const pages = [
    { name: 'Organisations', href: '#', current: true },
]
</script>

<template>
    <AuthenticatedLayout>
        <Head title="Organisations"/>
        <div class="px-4 sm:px-6 lg:px-8">
            <Breadcrumbs :pages="pages"/>
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-2xl font-semibold leading-6 text-gray-900">Organisations</h1>
                    <p class="mt-2 text-sm text-gray-700">
                        La liste des organisations de la Senelec.
                    </p>
                </div>
            </div>
            <Datatable :pagination="pagination" v-if="hasData(orgs.data)" v-model="search.keyword">
                <table v-if="displayedData.length > 0" class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                    <tr>
                        <TableHeading :first="true">Nom</TableHeading>
                        <TableHeading>Centre de Responsabilité</TableHeading>
                        <TableHeading>Type</TableHeading>
                        <TableHeading>Organisation Mère</TableHeading>
                        <TableHeading>CR Organisation Mère</TableHeading>
                        <TableHeading></TableHeading>

                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="org in displayedData" :key="org.org_id">
                        <TableData class="whitespace-pre-line" :first="true">{{ org.org_name }}</TableData>
                        <TableData class="whitespace-pre-line">{{ org.org_responsibility_center }}</TableData>
                        <TableData >{{ org.org_type }}</TableData>
                        <TableData >{{ org.parent ? org.parent.org_name : 'No Parent Org'}}</TableData>
                        <TableData >{{ org.parent ? org.parent.org_responsibility_center : 'No Parent Org'}}</TableData>
                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <div class="flex items-center justify-center">
                                <Link :href="route('orgs.show', {org: org.org_id})" class="group flex items-center px-4 py-2 text-sm">
                                    <EyeIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-amber-600" aria-hidden="true" />
                                </Link>
                                <Link :href="route('orgs.edit', {org: org.org_id})" class="group flex items-center px-4 py-2 text-sm">
                                    <PencilSquareIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600" aria-hidden="true" />
                                </Link>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div v-else class="text-center bg-white text-lg text-gray-600 py-4"> Aucun élément trouvé. </div>
            </Datatable>
            <EmptyState
                v-else
                title="Pas d'organisation"
                message="Créer une nouvelle organisation en appuyant sur ce bouton"
                :link="route('orgs.create')"
                action="Nouveau" />
        </div>
    </AuthenticatedLayout>
</template>

<style scoped></style>