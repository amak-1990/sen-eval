<script setup>
	import TableData from "@/Components/Common/Tables/TableData.vue";
	import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
	import Datatable from "@/Components/Common/Tables/Datatable.vue";
	import TableHeading from "@/Components/Common/Tables/TableHeading.vue";
    import {Head, Link, router} from '@inertiajs/vue3'
	import {computed, reactive, ref, watch} from "vue";
	import {ChevronDownIcon, PencilSquareIcon, PlusIcon, TrashIcon} from "@heroicons/vue/20/solid/index.js";
	import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
	import DeleteModal from "@/Components/Common/DeleteModal.vue";
	import {hasData} from "@/helpers/helper.js";
	import EmptyState from "@/Components/Common/EmptyState.vue";
	import axios from "axios";
	import Breadcrumbs from "@/Components/Common/Breadcrumbs.vue";
    import ToggleOnDatatable from "@/Components/Forms/ToggleOnDatatable.vue";

	const props = defineProps({
	    trainings: {
	        type: Object
	    }
	})

	const pagination = computed(() => {
	    return {
	        links: props.trainings.links,
	        per_page: props.trainings.per_page,
	        total: props.trainings.total,
	        from: props.trainings.from,
	        to: props.trainings.to,
	    };
	});

	const openModal = ref(false);
	let idToDestroy = hasData(props.trainings.data) ? props.trainings.data[0].training_type_id : null
	const destroy = (id) => {
		idToDestroy = id;
		openModal.value = true;
	}

	const displayedData = ref(props.trainings.data);
	const search = reactive({
	    keyword: '',
	    fields: ['training_type_name'],
	});
	watch(
	    () => search.keyword,
	    function (next) {
	        if (next === '') {
	            displayedData.value = props.trainings.data;
	        } else {
	            axios.post(route('trainingTypes.search'), search).then(res => (displayedData.value = res.data));
	        }
	    }
	);
	watch(
		()=> props.trainings,
		function (next) {
			displayedData.value = next.data;
			if(!displayedData.value.length >0) {
				if(next.prev_page_url) router.get(next.prev_page_url)
				else router.get(next.first_page_url);
			}
		}
	);

	const pages = [
		{ name: 'Types de Formation', href: '#', current: true },
	]
</script>

<template>
    <AuthenticatedLayout>
        <Head title="Types de Formation"/>
        <div class="px-4 sm:px-6 lg:px-8">
	        <Breadcrumbs :pages="pages"/>
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-2xl font-semibold leading-6 text-gray-900">Types de Formation</h1>
                    <p class="mt-2 text-sm text-gray-700"
                    >La liste des formations qu'il sera possible de proposer ou demander lors de l'évaluation.</p>
                </div>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <Link
                        :href="route('trainingTypes.create')"
                        class="inline-flex gap-x-1.5 rounded-md bg-purple-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                        as="button"
                    >Ajouter un Type
	                    <PlusIcon class="-mr-0.5 h-5 w-5" />
                    </Link>
                </div>
            </div>
            <Datatable :pagination="pagination" v-if="hasData(trainings.data)" v-model="search.keyword">
                <table v-if="displayedData.length > 0" class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                    <tr>
                        <TableHeading :first="true">Nom</TableHeading>
                        <TableHeading>Description</TableHeading>
                        <TableHeading>Status</TableHeading>
                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="training in displayedData" :key="training.training_type_id">
                        <TableData :first="true">{{ training.training_type_name }}</TableData>
                        <TableData>{{ training.training_type_desc }}</TableData>
                        <TableData class="flex space-x-2">
                            <ToggleOnDatatable :link="route('trainingTypes.update',{trainingType: training.training_type_id})" :value="training.training_type_is_active" obj="training_type_is_active"/>
                            <span
                                :class="training.training_type_is_active ? 'bg-green-50 text-green-700 ring-green-600/20' : 'bg-red-50 text-red-700 ring-red-600/20'"
                                class="inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ring-1 ring-inset ">
                                {{ training.training_type_is_active ? 'Activé' : 'Désactivé' }}
                            </span>
                        </TableData>
	                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
		                    <Menu as="div" class="relative inline-block text-left">
			                    <div>
				                    <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
					                    Options
					                    <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
				                    </MenuButton>
			                    </div>
			                    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
				                    <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					                    <div class="py-1">
						                    <MenuItem v-slot="{ active }">
							                    <Link :href="route('trainingTypes.edit',{trainingType: training.training_type_id})" :class="[active ? 'bg-gray-100 text-purple-600' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
								                    <PencilSquareIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-purple-600" aria-hidden="true" />
								                    Modifier
							                    </Link>
						                    </MenuItem>
						                    <MenuItem v-slot="{ active }">
							                    <a href="#" @click="destroy(training.training_type_id)" :class="[active ? 'bg-gray-100 text-red-600' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
								                    <TrashIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-600" aria-hidden="true" />
								                    Supprimer
							                    </a>
						                    </MenuItem>
					                    </div>
				                    </MenuItems>
			                    </transition>
		                    </Menu>
	                    </td>
                    </tr>
                    </tbody>
                </table>
                <div v-else class="text-center bg-white text-lg text-gray-600 py-4"> Aucun élément trouvé. </div>
            </Datatable>
	        <EmptyState
		        v-else
		        title="Pas de type de formation"
		        message="Créer un nouveau type en appuyant sur ce bouton"
		        :link="route('trainingTypes.create')"
		        action="Nouveau"
	         />
	        <DeleteModal :opened="openModal" :id="idToDestroy" @close-modal="openModal=false" name="trainingType" link="trainingTypes.destroy"/>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>

</style>