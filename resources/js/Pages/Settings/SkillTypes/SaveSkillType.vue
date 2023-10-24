<script setup>
	import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
    import {Head, useForm} from "@inertiajs/vue3";
	import InputLabel from "@/Components/Forms/InputLabel.vue";
	import TextInput from "@/Components/Forms/TextInput.vue";
	import TextArea from "@/Components/Forms/TextArea.vue";
	import SubmitButton from "@/Components/Forms/SubmitButton.vue";
	import {computed, watch} from "vue";
	import {isEmpty} from "@/helpers/helper.js";
	import InputError from "@/Components/Forms/InputError.vue";
	import Breadcrumbs from "@/Components/Common/Breadcrumbs.vue";
	import FormIndications from "@/Components/Forms/FormIndications.vue";
    import NumberInput from "@/Components/Forms/NumberInput.vue";

	const props = defineProps({
		skill: {
			type: Object,
			default: {}
		}
	})
	let form;

	const setForm =  () => {
		form = useForm((isEmpty(props.skill)) ?
				{
					skill_type_name: '',
                    skill_type_marking: 10,
					skill_type_desc: ''
				} :
				{
					skill_type_name: props.skill.skill_type_name || '',
					skill_type_marking: props.skill.skill_type_marking || 10,
					skill_type_desc: props.skill.skill_type_desc || ''
				}
		);
	}
	setForm()


	const submit = () => {
		if (isEmpty(props.skill))
			form.post(route('skillTypes.store'),{
				onSuccess: () => setForm()
			});
		else
			form.put(route('skillTypes.update',{skillType:props.skill.skill_type_id}),{
				onSuccess: () => setForm()
			});
	}

	const title = computed(() => {
		return isEmpty(props.skill) ? 'Nouveau Type de Compétence' : 'Modifier Type de Compétence';
	})

	const pages = [
		{ name: 'Types de Compétence', href: route('skillTypes.index'), current: false },
		{ name: 'Nouveau', href: '#', current: true },
	]
</script>
<template>
	<AuthenticatedLayout>
        <Head title="Nouveau type de Compétence"/>
		<div class="px-4 sm:px-6 lg:px-8">
			<Breadcrumbs :pages="pages"/>
			<div class="sm:flex sm:items-center">
				<div class="sm:flex-auto">
					<h1 class="text-2xl font-semibold leading-6 text-gray-900">{{ title }}</h1>
	                <p class="mt-2 text-sm text-gray-700">Ajouter ou modifier un type de compétence.</p>
				</div>
			</div>
			<div class="mt-8 flow-root">
			<form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" @submit.prevent="submit">
				<div class="px-4 py-6 sm:p-8">
					<div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div class="sm:col-span-4">
							<InputLabel for="name" required>Nom de la compétence</InputLabel>
							<div class="mt-2">
								<TextInput
										v-model="form.skill_type_name"
										:invalid="form.errors.skill_type_name !== undefined"
										id="name"
										placeholder="Nom" autofocus/>
							</div>
                            <InputError :message="form.errors.skill_type_name"/>
						</div>

                        <div class="sm:col-span-4">
							<InputLabel for="marking" required>Barème</InputLabel>
							<div class="mt-2">
								<NumberInput
										v-model="form.skill_type_marking"
										:invalid="form.errors.skill_type_marking !== undefined"
										id="marking"
										placeholder="Barème"/>
							</div>
                            <InputError :message="form.errors.skill_type_marking"/>
						</div>

						<div class="col-span-full">
							<InputLabel for="description">Description</InputLabel>
							<div class="mt-2">
                                <TextArea
		                                v-model="form.skill_type_desc"
		                                :invalid="form.errors.skill_type_desc !== undefined"
		                                id="description"
		                                placeholder="Description"
                                />
							</div>
							<!--                            <p class="mt-3 text-sm leading-6 text-gray-600">Optionnel</p>-->
						</div>
					</div>
				</div>
				<div class="flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
					<FormIndications />
					<SubmitButton :disabled="form.processing">
						Enregistrer
					</SubmitButton>
				</div>
			</form>
		</div>
		</div>
	</AuthenticatedLayout>
</template>