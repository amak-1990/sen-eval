<script setup>
import {ref, watch} from 'vue'
import {Dialog, DialogPanel, Listbox, ListboxButton, ListboxOption, ListboxOptions, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {CheckIcon} from '@heroicons/vue/24/outline'
import {hasData} from "@/helpers/helper.js";
import InputLabel from "@/Components/Forms/InputLabel.vue";
import InputError from "@/Components/Forms/InputError.vue";
import TextArea from "@/Components/Forms/TextArea.vue";
import {ChevronUpDownIcon} from "@heroicons/vue/20/solid/index.js";
import FormIndications from "@/Components/Forms/FormIndications.vue";
import SubmitButton from "@/Components/Forms/SubmitButton.vue";
import {useForm} from "@inertiajs/vue3";
import TextInput from "@/Components/Forms/TextInput.vue";

const props = defineProps({
    opened: {type: Boolean, default: false},
    types: {},
    isValidator: {},
    rating: {},
    mobility: {},
})
const o = ref(false)
let form;

const setupForm = (mobility) => {
    form = useForm(mobility === undefined ? {
        rating_mobility_title: '',
        rating_mobility_comment: '',
        mobility_type_id: hasData(props.types) ? props.types[0].mobility_type_id : null
    } : {
        rating_mobility_id: mobility.rating_mobility_id,
        rating_mobility_title: mobility.rating_mobility_title,
        rating_mobility_comment: mobility.rating_mobility_comment || '',
        mobility_type_id: mobility.mobility_type_id
    })

}

const submit = () => {
    if (form.rating_mobility_id)
        form.put(route('rating-mobilities.update', {rating: props.rating.rating_id, rating_mobility: form.rating_mobility_id}), {
            onSuccess: params => {
                o.value = false;
                emit('closeModal');
                setupForm()
            }
        })
    else
        form.post(route('rating-mobilities.store', {rating: props.rating.rating_id}), {
            onSuccess: params => {
                o.value = false;
                emit('closeModal');
                setupForm()
            },
        })
}

setupForm()

watch(() => props.opened, (next) => {
    o.value = next;
}, {immediate: true});

watch(() => props.mobility, (next) => {
    setupForm(next)
})


const emit = defineEmits(['closeModal'])

</script>

<template>
    <TransitionRoot :show="o" as="template">
        <Dialog as="div" class="relative z-10" @close="o = false;$emit('closeModal')">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200"
                             leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                     enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100"
                                     leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white dark:bg-grayish px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                            <form v-if="!isValidator && !rating.rating_is_validated"
                                  @submit.prevent="submit">
                                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">Demander une mobilité</h3>
                                <div class="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-100">
                                    <p>Rechercher une mobilité et ajouter la à la liste des demandes pour cette évaluation. </p>
                                </div>
                                <div class="px-4 py-6 sm:p-8">
                                    <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div class="col-span-full">
                                            <InputLabel for="" required>Poste / Localité</InputLabel>
                                            <div class="mt-2">
                                                <TextInput ref="input" v-model="form.rating_mobility_title" :invalid="form.errors.rating_mobility_title !== undefined"/>
                                            </div>
                                            <div class="flex flex-col space-y-2">
                                                <InputError :message="form.errors.rating_mobility_title"/>
                                            </div>
                                        </div>
                                        <div class="col-span-full">
                                            <InputLabel>Commentaire</InputLabel>
                                            <div class=" mt-2">
                                                <TextArea v-model="form.rating_mobility_comment"/>
                                            </div>
                                        </div>
                                        <div class="col-span-full relative">
                                            <InputLabel for="" required>Nature</InputLabel>
                                            <Listbox v-model="form.mobility_type_id">
                                                <div class="relative">
                                                    <ListboxButton
                                                        :class="form.errors.phase_id ? 'ring-red-300':'ring-gray-300'"
                                                        class="w-full cursor-default rounded-md bg-white dark:bg-grayish py-1.5 pl-3 pr-10 text-left text-gray-900 dark:text-white shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm sm:leading-6">
                                        <span v-if="hasData(types)"
                                              class="block truncate">{{ types.filter((type) => type.mobility_type_id === form.mobility_type_id)[0].mobility_type_name
                                            }}</span>
                                                        <span v-else class="block truncate">Aucune Mobilité disponible pour l'instant.</span>
                                                        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
                                    </span>
                                                    </ListboxButton>
                                                    <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                                                                leave-to-class="opacity-0">
                                                        <ListboxOptions v-if="hasData(types)"
                                                                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-grayish py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            <ListboxOption v-for="type in types" :key="type.mobility_type_id" v-slot="{ active, selected }"
                                                                           :value="type.mobility_type_id"
                                                                           as="template">
                                                                <li :class="[active ? 'bg-cyan-600  text-white' : 'text-gray-900 dark:text-white', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                                                    <span
                                                                        :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ type.mobility_type_name
                                                                        }}</span>
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
                                        <InputError :message="form.errors.mobility_type_id"/>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                                    <FormIndications/>
                                    <SubmitButton :disabled="rating.rating_is_validated" :processing="form.processing" class=" mt-3 sm:ml-3 sm:mt-0 sm:w-auto"
                                                  type="submit">Enregistrer
                                    </SubmitButton>
                                </div>
                            </form>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

