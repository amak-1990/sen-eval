<script setup>
import {ref, watch} from 'vue'
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {ExclamationTriangleIcon} from '@heroicons/vue/24/outline'
import {router} from "@inertiajs/vue3";

const props = defineProps({
    opened: {type: Boolean, default: false},
    link: {type: String},
})

const o = ref(false);

watch(() => props.opened, (next) => {
    o.value = next;
}, {immediate: true});


defineEmits(['closeModal'])

const destroy = () => {
    router.delete(props.link)
}

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
                            class="relative transform overflow-hidden rounded-lg bg-white dark:bg-grayish px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                            <div class="sm:flex sm:items-start">
                                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationTriangleIcon aria-hidden="true" class="h-6 w-6 text-red-600"/>
                                </div>
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900 dark:text-white">Suppression</DialogTitle>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500 dark:text-gray-100">Êtes vous sûre de vouloir continuer ? Cette action est irréversible.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                <button
                                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    type="button"
                                    @click="destroy();o = false;$emit('closeModal');">Supprimer
                                </button>
                                <button ref="cancelButtonRef"
                                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-grayish px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        type="button" @click="o = false;$emit('closeModal')">Annuler
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

