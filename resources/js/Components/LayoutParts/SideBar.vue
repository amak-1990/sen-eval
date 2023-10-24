<script setup>

import {
    Cog6ToothIcon,
    HomeIcon,
    XMarkIcon,
    ChevronRightIcon,
    CalendarDaysIcon,
    UsersIcon, LockClosedIcon
} from "@heroicons/vue/24/outline/index.js";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	TransitionChild,
	TransitionRoot
} from "@headlessui/vue";
import {computed, ref, watch} from "vue";

import {Link, usePage} from '@inertiajs/vue3';

const props = defineProps({
    opened : {
        type: Boolean,
    }
})

const user = computed(() => usePage().props.auth.user);
const sidebarOpen = ref(false)
const getCurrentRoute = () => {
	let routeName = route().current();
	if (routeName.indexOf(".") === -1) return routeName;
	return routeName.substring(0, routeName.indexOf("."))
}
const currentRoute = getCurrentRoute();

let navigation = [
    { name: 'Dashboard', href: route('home'), icon: HomeIcon, current: currentRoute === 'home' },
]
if ([1,2].includes(user.value.role_id)) {
    navigation.push(
		{
			name: 'Phase d\'évaluation',
			icon: CalendarDaysIcon,
			current: ['phases','periods'].includes(currentRoute),
			href: route('phases.index')

	    },
	    {
	        name: 'Paramètres Généraux',
	        icon: Cog6ToothIcon,
	        current: ['skillTypes','trainingTypes','sanctionTypes','mobilityTypes','claimTypes','skills'].includes(currentRoute),
	        children: [
	            { name: 'Formations', href: route('trainingTypes.index'), current: currentRoute === 'trainingTypes' },
	            { name: 'Types de Compétence', href: route('skillTypes.index'), current: currentRoute === 'skillTypes' },
	            { name: 'Compétence', href: route('skills.index'), current: currentRoute === 'skills' },
	            { name: 'Sanctions', href: route('sanctionTypes.index'), current: currentRoute === 'sanctionTypes' },
	            { name: 'Mobilités', href: route('mobilityTypes.index'), current: currentRoute === 'mobilityTypes' },
	            { name: 'Réclamation', href: route('claimTypes.index'), current: currentRoute === 'claimTypes' },
	        ],
    })
}
if ([1].includes(user.value.role_id)) {
    navigation.push(
		{
			name: 'Agents',
			icon: UsersIcon,
			current: currentRoute === 'users',
			href: route('users.index')
	    },
        {
			name: 'Roles',
			icon: LockClosedIcon,
			current: currentRoute === 'roles',
			href: route('roles.index')
	    }
    );
}
watch(
    () => props.opened,
    function (newValue) {
        sidebarOpen.value = newValue;
    }
)

defineEmits(['closeSidebar'])

</script>

<template>
    <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false;$emit('closeSidebar')">
            <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-900/80" />
            </TransitionChild>
            <div class="fixed inset-0 flex">
                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                    <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                        <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                            <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                                <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false;$emit('closeSidebar')">
                                    <span class="sr-only">Close sidebar</span>
                                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </TransitionChild>
                        <!-- Sidebar component, swap this element with another sidebar if you like -->
                        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-purple-800 px-6 pb-4">
                            <div class="flex h-16 shrink-0 items-center">
                                <img class="h-8 w-auto" src="../../assets/logo1637145113.png" alt="Your Company" />
                            </div>
                            <nav class="flex flex-1 flex-col">
                                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <ul role="list" class="-mx-2 space-y-1">
                                            <li v-for="item in navigation" :key="item.name">
                                                <Link v-if="!item.children" :href="item.href" :class="[item.current ? 'bg-purple-500 text-white' : 'text-white hover:text-white hover:bg-purple-500', 'group flex gap-x-3 rounded-md p-2 text-base leading-6 font-semibold']">
                                                    <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-white group-hover:text-white', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                                                    {{ item.name }}
                                                </Link>
	                                            <Disclosure as="div" v-else v-slot="{ open }">
		                                            <DisclosureButton :class="[item.current ? 'bg-purple-500 text-white' : 'text-white hover:text-white hover:bg-purple-500', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-base leading-6 font-semibold text-white']">
			                                            <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-white group-hover:text-white', 'h-6 w-6 shrink-0']" aria-hidden="true" />
			                                            {{ item.name }}
			                                            <ChevronRightIcon :class="[open ? 'rotate-90 text-white' : 'text-gray-300', 'ml-auto h-5 w-5 shrink-0']" aria-hidden="true" />
		                                            </DisclosureButton>
		                                            <DisclosurePanel as="ul" class="mt-1 px-2">
			                                            <li v-for="subItem in item.children" :key="subItem.name">
				                                            <!-- 44px -->
				                                            <DisclosureButton as="a" :href="subItem.href" :class="[subItem.current ? 'bg-purple-500 text-white' : 'text-white hover:text-white hover:bg-purple-500', 'block rounded-md py-2 pr-2 pl-9 font-semibold text-base leading-6 text-gray-700']">{{ subItem.name }}</DisclosureButton>
			                                            </li>
		                                            </DisclosurePanel>
	                                            </Disclosure>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-purple-700 px-3 pb-4">
            <div class="flex h-24 shrink-0 items-center justify-center">
	            <img class="h-24 w-auto" src="../../assets/logo1637145113.png" alt="Your Company" />
            </div>
            <nav class="flex flex-1 flex-col ">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" class="-mx-2 space-y-1">
                            <li v-for="item in navigation" :key="item.name">
                                <Link v-if="!item.children" :href="item.href" :class="[item.current ? 'bg-purple-500 text-white' : 'text-white hover:text-white hover:bg-purple-500', ' group flex gap-x-3 rounded-md p-2 text-base leading-6 font-semibold']">
                                    <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-white group-hover:text-white', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                                    {{ item.name }}
                                </Link>
	                            <Disclosure as="div" v-else v-slot="{ open }">
		                            <DisclosureButton :class="[item.current ? 'bg-purple-500 text-white' : 'text-white hover:text-white hover:bg-purple-500', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-base leading-6 font-semibold text-white']">
			                            <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-white group-hover:text-white', 'h-6 w-6 shrink-0']" aria-hidden="true" />
			                            {{ item.name }}
			                            <ChevronRightIcon :class="[open ? 'rotate-90 text-white' : 'text-gray-300', 'ml-auto h-5 w-5 shrink-0']" aria-hidden="true" />
		                            </DisclosureButton>
		                            <DisclosurePanel as="ul" class="mt-1 px-2 space-y-1">
			                            <li v-for="subItem in item.children" :key="subItem.name">
				                            <!-- 44px -->
				                            <DisclosureButton as="a" :href="subItem.href" :class="[subItem.current ? 'bg-purple-500 text-white' : 'text-white hover:text-white hover:bg-purple-500', 'block rounded-md py-2 pr-2 pl-9 text-base font-semibold leading-6 text-gray-700']">{{ subItem.name }}</DisclosureButton>
			                            </li>
		                            </DisclosurePanel>
	                            </Disclosure>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>