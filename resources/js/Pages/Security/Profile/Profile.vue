<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, useForm, usePage} from '@inertiajs/vue3';
import Breadcrumbs from "@/Components/Common/Breadcrumbs.vue";
import TextInput from "@/Components/Forms/TextInput.vue";
import SubmitButton from "@/Components/Forms/SubmitButton.vue";
import {CheckIcon, ChevronUpDownIcon, LockClosedIcon} from "@heroicons/vue/20/solid/index.js";
import {capitalized, isEmpty, moment} from "@/helpers/helper.js";
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxLabel,
    ComboboxOption,
    ComboboxOptions,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions
} from "@headlessui/vue";
import {computed, reactive, ref, watch} from "vue";
import InputLabel from "@/Components/Forms/InputLabel.vue";

const props = defineProps({
    user: {type: Object},
    n1s: {type: Array},
    orgs: {type: Array},
    roles: {type: Array}
});

const isRoot = computed(() => usePage().props.auth.user.role_id === 1)

const pages = [
    {name: 'Profil', href: '#', current: true},
]

const form = useForm(isRoot ? {
    n1_id: props.user.n1 ? props.user.n1.user_id : -1,
    org_id: props.user.org ? props.user.org.org_id : null,
    role_id: props.user.role.role_id
} : {
    n1_id: props.user.n1 ? props.user.n1.user_id : -1,
    org_id: props.user.org ? props.user.org.org_id : null,
})
const orgs = props.orgs;
const queryOrgs = ref('')
const filteredOrgs = ref(orgs)
const searchOrgs = reactive({keyword: '', fields: ['org_name', 'org_responsibility_center']});

const n1s = props.n1s;
const query = ref('')
const filteredN1 = ref(n1s)
const search = reactive({keyword: '', fields: ['user_matricule', 'user_display_name']});

const setData = () => useForm(!isEmpty(props.user) ? {
    user_first_name: props.user.user_first_name || '',
    user_last_name: props.user.user_last_name || '',
    email: props.user.email || '',
    org_name: props.user.org ? props.user.org.org_name : '',
    user_title: props.user.user_title || '',
    user_matricule: props.user.user_matricule || '',
    group_name: props.user.group ? props.user.group.group_name : '',
    user_responsibility_center: props.user.user_responsibility_center || '',
    user_gf: props.user.user_gf || '',
    user_nr: props.user.user_nr || '',
    user_gf_prom_date: props.user.user_gf_prom_date || '',
    user_nr_prom_date: props.user.user_nr_prom_date || '',
} : {})

const data = setData();

const submitForm = () => form.put(route('profile.update', {profile: props.user.user_id}));

const getFromDb = () => {
    return axios.post(route('users.search'), search);
}
const getOrgsFromDb = () => {
    return axios.post(route('orgs.search'), searchOrgs);
}

watch(() => query.value, function (next) {
    let filtered = next === ''
        ? n1s
        : n1s.filter((n1) => {
            return n1.user_matricule.toLowerCase().includes(query.value.toLowerCase()) || n1.user_display_name.toLowerCase().includes(query.value.toLowerCase())
        })
    if (filtered.length > 0) filteredN1.value = filtered;
    else {
        if (next.length >= 3)
            getFromDb().then(res => filteredN1.value = res.data);
    }
})

watch(() => queryOrgs.value, function (next) {
    let filtered = next === ''
        ? orgs
        : orgs.filter((org) => {
            return org.org_name.toLowerCase().includes(queryOrgs.value.toLowerCase()) || org.org_responsibility_center.toLowerCase().includes(queryOrgs.value.toLowerCase())
        })
    if (filtered.length > 0) filteredOrgs.value = filtered;
    else {
        if (next.length >= 3)
            getOrgsFromDb().then(res => filteredOrgs.value = res.data);
    }
})

</script>

<template>
    <AuthenticatedLayout>
        <Head title="Profil"/>
        <div class="px-4 sm:px-6 lg:px-8">
            <Breadcrumbs :pages="pages"/>
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-2xl font-semibold leading-6 text-gray-900 dark:text-white">Profil de {{ user.user_display_name }}</h1>
                    <p class="mt-2 text-sm text-gray-700 dark:text-white">
                        Informations personnelles et administratives de l'agent.
                    </p>
                </div>
            </div>
            <div class="mt-8 shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg bg-white dark:bg-grayish">
                <div class="grid max-w-full grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                    <div>
                        <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-white">Informations Personnelles</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-400">Vous ne pouvez pas modifier ces informations.</p>
                    </div>
                    <form class="md:col-span-2">
                        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                            <div class="col-span-full flex items-center gap-x-8">
                                <img alt="" class="h-24 w-24 flex-none bg-cyan-600 dark:bg-black object-cover"/>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white" for="first-name">Prénom</label>
                                <div class="relative shadow-sm rounded-md mt-2">
                                    <TextInput v-model="data.user_first_name" :disabled="true"/>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white" for="last-name">Nom</label>
                                <div class="relative shadow-sm rounded-md mt-2">
                                    <TextInput v-model="data.user_last_name" :disabled="true"/>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-full">
                                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white" for="email">Email</label>
                                <div class="relative shadow-sm rounded-md mt-2">
                                    <TextInput v-model="data.email" :disabled="true"/>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--                        <div class="mt-8 flex">-->
                        <!--                            <button :disabled="true"-->
                        <!--                                    class="inline-flex gap-x-1.5 disabled:opacity-70 rounded-md bg-cyan-600  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"-->
                        <!--                                    type="submit">-->
                        <!--                                Enregistrer-->
                        <!--                                <CheckIcon class="text-white -mr-0.5 h-5 w-5"/>-->
                        <!--                            </button>-->
                        <!--                        </div>-->
                    </form>
                </div>
                <div class="grid max-w-full grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 border-t-2 dark:border-gray-600">
                    <div>
                        <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-white">Informations Administratives</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-400">Changer le supérieur hiérarchique de l'agent ou son organisation.</p>
                    </div>
                    <form class="md:col-span-2" @submit.prevent="submitForm">
                        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                            <div class="col-span-full">
                                <Combobox v-model="form.org_id" as="div">
                                    <ComboboxLabel class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Organisation</ComboboxLabel>
                                    <div class="relative mt-2">
                                        <ComboboxInput
                                            :display-value="(id) => { let selected = filteredOrgs.filter(org => org.org_id === id)[0] || user.org ;
                                                return selected ? selected.org_name + ' ' + selected.org_responsibility_center : 'Non défini'}"
                                            class="w-full rounded-md border-0 bg-white dark:bg-grayish py-1.5 pl-3 pr-12 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 dark:ring-2 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
                                            @change="searchOrgs.keyword = queryOrgs = $event.target.value; "/>
                                        <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                            <ChevronUpDownIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                        </ComboboxButton>
                                        <ComboboxOptions v-if="filteredOrgs.length > 0"
                                                         class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-grayish py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            <ComboboxOption v-for="org in filteredOrgs" :key="org.org_id" v-slot="{ active, selected }" :value="org.org_id"
                                                            as="template">
                                                <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-cyan-600  text-white' : 'text-gray-900 dark:text-white']">
                                                    <div class="flex">
                                                        <span :class="['truncate', selected && 'font-semibold']">
                                                            {{ org?.org_name + ' --> ' + org?.org_responsibility_center }}
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
                            <div class="col-span-full">
                                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white" for="confirm-password">Poste</label>
                                <div class="relative shadow-sm rounded-md mt-2">
                                    <TextInput v-model="data.user_title" :disabled="true"/>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-full">
                                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white" for="confirm-password">College</label>
                                <div class="relative shadow-sm rounded-md mt-2">
                                    <TextInput v-model="data.group_name" :disabled="true"/>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white" for="first-name">Matricule</label>
                                <div class="relative shadow-sm rounded-md mt-2">
                                    <TextInput v-model="data.user_matricule" :disabled="true"/>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white" for="last-name">Centre de Responsabilité</label>
                                <div class="relative shadow-sm rounded-md mt-2">
                                    <TextInput v-model="data.user_responsibility_center" :disabled="true"/>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white" for="first-name">GF</label>
                                <div class="relative shadow-sm rounded-md mt-2">
                                    <TextInput v-model="data.user_gf" :disabled="true"/>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white" for="last-name">NR</label>
                                <div class="relative shadow-sm rounded-md mt-2">
                                    <TextInput v-model="data.user_nr" :disabled="true"/>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white" for="first-name">Date Promotion GF</label>
                                <div class="relative shadow-sm rounded-md mt-2">
                                    <input
                                        :disabled="true"
                                        :value="capitalized(moment(data.user_gf_prom_date).format('DD MMMM YYYY'))"
                                        class="bg-white dark:bg-grayish block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 dark:ring-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white" for="last-name">Date Promotion NR</label>
                                <div class="relative shadow-sm rounded-md mt-2">
                                    <input
                                        :disabled="true"
                                        :value="capitalized(moment(data.user_nr_prom_date).format('DD MMMM YYYY'))"
                                        class="bg-white dark:bg-grayish block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 dark:ring-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </div>
                                </div>
                            </div>
                            <div v-if="isRoot" class="sm:col-span-4">
                                <InputLabel>Role</InputLabel>
                                <div class="mt-2">
                                    <Listbox v-model="form.role_id" as="div">
                                        <div class="relative mt-2">
                                            <ListboxButton
                                                class="relative w-full cursor-default rounded-md bg-white dark:bg-grayish py-1.5 pl-3 pr-10 text-left text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm sm:leading-6">
                                                <span class="block truncate">{{ roles.filter((type) => type.role_id === form.role_id)[0].role_name }}</span>
                                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                            </span>
                                            </ListboxButton>
                                            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                                                <ListboxOptions
                                                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-grayish py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    <ListboxOption v-for="type in roles" :key="type.role_id" v-slot="{ active, selected }" :value="type.role_id"
                                                                   as="template">
                                                        <li :class="[active ? 'bg-cyan-600  text-white' : 'text-gray-900 dark:text-white', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                                            <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ type.role_name }}</span>
                                                            <span v-if="selected"
                                                                  :class="[active ? 'text-white' : 'text-cyan-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                                            <CheckIcon aria-hidden="true" class="h-5 w-5"/>
                                                        </span>
                                                        </li>
                                                    </ListboxOption>
                                                </ListboxOptions>
                                            </transition>
                                        </div>
                                    </Listbox>
                                </div>
                            </div>
                            <div class="col-span-full">
                                <Combobox v-model="form.n1_id" as="div">
                                    <ComboboxLabel class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Supérieure Hiérarchique (N + 1)
                                    </ComboboxLabel>
                                    <div class="relative mt-2">
                                        <ComboboxInput
                                            :display-value="(id) => { let selected = filteredN1.filter(n1 => n1.user_id === id)[0] || user.n1 ;
                                                return selected ? selected.user_matricule + ' ' + selected.user_display_name : 'Non défini'}"
                                            class="w-full rounded-md border-0 bg-white dark:bg-grayish py-1.5 pl-3 pr-12 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 dark:ring-2 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
                                            @change="search.keyword = query = $event.target.value; "/>
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
                        </div>
                        <div class="mt-8 flex">
                            <SubmitButton :processing="form.processing">Enregistrer</SubmitButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped></style>
