<script setup>

import TextInput from "@/Components/Forms/TextInput.vue";
import InputLabel from "@/Components/Forms/InputLabel.vue";
import InputError from "@/Components/Forms/InputError.vue";
import {useForm} from "@inertiajs/vue3";

const form = useForm({
    user_matricule: '',
});
const submit = () => {
    form.post(route('profile.setup'));
};

</script>

<template>
    <div class="flex items-center min-h-screen p-6 bg-gray-50 ">
        <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white dark:bg-grayish rounded-lg shadow-xl ">
            <div class="flex flex-col overflow-y-auto md:flex-row">
                <div class="h-20 md:h-auto md:w-1/3 flex items-center justify-center">
                    <img aria-hidden="true" class="object-cover w-30 h-30 alt=Office" src="../../assets/logo1637145113.png">
                </div>
                <div class="flex items-center justify-center flex-col p-12 sm:p-12 md:w-2/3">
                    <h1 class="mb-4 font-bold text-3xl text-cyan-700">
                        Système d'Évaluation du Personnel
                    </h1>
                    <h1 class="mb-2 font-semibold text-xl text-gray-700 dark:text-white">
                        Nous ne trouvons pas votre matricule ! Veuillez le renseigner ici avant de continuer.
                    </h1>
                    <div class="w-full mt-4">
                        <form class="mb-0 space-y-6" @submit.prevent="submit">
                            <div>
                                <InputLabel for="login">Matricule</InputLabel>
                                <div class="mt-2">
                                    <TextInput id="user_login" v-model="form.user_matricule" :invalid="form.errors.user_matricule !== undefined" autofocus
                                               placeholder="Login"/>
                                </div>
                                <InputError :message="form.errors.user_matricule"/>
                            </div>
                            <hr class="my-8">
                            <button :disabled="form.processing"
                                    class="block w-full px-4 py-2 mt-4 text-lg font-medium leading-5 text-center text-white transition-colors duration-150 bg-cyan-600  border border-transparent rounded-lg active:bg-cyan-600  hover:bg-cyan-700     focus:outline-none focus:shadow-outline-cyan">
                                Enregistrer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
